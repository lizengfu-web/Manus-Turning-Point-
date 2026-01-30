package com.turningpoint.api.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

@Service
public class CozeService {

    @Value("${coze.api.token}")
    private String token;

    @Value("${coze.api.project-id}")
    private String projectId;

    @Value("${coze.api.session-id}")
    private String sessionId;

    @Value("${coze.api.base-url}")
    private String baseUrl;

    private final OkHttpClient client = new OkHttpClient.Builder()
            .connectTimeout(60, TimeUnit.SECONDS)
            .writeTimeout(60, TimeUnit.SECONDS)
            .readTimeout(60, TimeUnit.SECONDS)
            .build();

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * 调用 Coze 智能体接口
     * 使用用户提供的 Token, Project ID, Session ID 和 Base URL
     */
    public String chat(String userId, String query) throws IOException {
        ObjectNode rootNode = objectMapper.createObjectNode();
        
        // content 节点
        ObjectNode contentNode = rootNode.putObject("content");
        ObjectNode queryNode = contentNode.putObject("query");
        ArrayNode promptArray = queryNode.putArray("prompt");
        ObjectNode promptItem = promptArray.addObject();
        promptItem.put("type", "text");
        ObjectNode textContent = promptItem.putObject("content");
        textContent.put("text", query);

        // 根节点参数
        rootNode.put("type", "query");
        // 优先使用配置中的 session_id，如果没有则使用传入的 userId
        rootNode.put("session_id", (sessionId != null && !sessionId.isEmpty()) ? sessionId : userId);
        rootNode.put("project_id", projectId);

        String jsonBody = objectMapper.writeValueAsString(rootNode);
        RequestBody body = RequestBody.create(jsonBody, MediaType.get("application/json; charset=utf-8"));

        Request request = new Request.Builder()
                .url(baseUrl)
                .post(body)
                .addHeader("Authorization", "Bearer " + token)
                .addHeader("Content-Type", "application/json")
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

            String responseBody = response.body().string();
            
            // 针对 stream_run 接口的响应解析
            try {
                JsonNode resNode = objectMapper.readTree(responseBody);
                // 尝试解析返回的文本内容，具体取决于智能体输出的 JSON 结构
                if (resNode.has("data")) {
                    return resNode.get("data").asText();
                }
                return responseBody;
            } catch (Exception e) {
                return responseBody;
            }
        }
    }
}
