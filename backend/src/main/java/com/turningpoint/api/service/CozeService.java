package com.turningpoint.api.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

@Service
public class CozeService {

    @Value("${coze.api.key}")
    private String apiKey;

    @Value("${coze.api.project-id}")
    private String projectId;

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
     * 适配示例: https://jcp33s7bqh.coze.site/stream_run
     */
    public String chat(String userId, String query) throws IOException {
        // 构建请求体 JSON 结构
        ObjectNode rootNode = objectMapper.createObjectNode();
        
        // content 节点
        ObjectNode contentNode = rootNode.putObject("content");
        ObjectNode queryNode = contentNode.putObject("query");
        ArrayNode promptArray = queryNode.putArray("prompt");
        ObjectNode promptItem = promptArray.addObject();
        promptItem.put("type", "text");
        ObjectNode textContent = promptItem.putObject("content");
        textContent.put("text", query);

        // 其他根节点参数
        rootNode.put("type", "query");
        // 使用传入的 userId 或生成一个 session_id
        rootNode.put("session_id", userId != null ? userId : UUID.randomUUID().toString());
        rootNode.put("project_id", projectId);

        String jsonBody = objectMapper.writeValueAsString(rootNode);
        RequestBody body = RequestBody.create(jsonBody, MediaType.get("application/json; charset=utf-8"));

        Request request = new Request.Builder()
                .url(baseUrl)
                .post(body)
                .addHeader("Authorization", "Bearer " + apiKey)
                .addHeader("Content-Type", "application/json")
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

            String responseBody = response.body().string();
            
            // 注意：stream_run 接口通常返回流式数据或特定格式
            // 这里假设我们处理非流式的最终结果，或者解析返回的 JSON
            // 根据 Coze 智能体 Web 接口的常见返回格式进行解析
            try {
                JsonNode resNode = objectMapper.readTree(responseBody);
                // 尝试解析常见的返回路径，如果接口返回的是流式文本，这里可能需要更复杂的解析逻辑
                // 针对示例接口，通常结果在 data 或特定的 message 字段中
                if (resNode.has("data")) {
                    return resNode.get("data").asText();
                }
                return responseBody; // 如果无法解析特定字段，返回原始响应
            } catch (Exception e) {
                return responseBody;
            }
        }
    }
}
