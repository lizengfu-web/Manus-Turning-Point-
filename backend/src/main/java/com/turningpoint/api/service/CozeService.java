package com.turningpoint.api.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
public class CozeService {

    @Value("${coze.api.key}")
    private String apiKey;

    @Value("${coze.api.bot-id}")
    private String botId;

    @Value("${coze.api.base-url}")
    private String baseUrl;

    private final OkHttpClient client = new OkHttpClient.Builder()
            .connectTimeout(60, TimeUnit.SECONDS)
            .writeTimeout(60, TimeUnit.SECONDS)
            .readTimeout(60, TimeUnit.SECONDS)
            .build();

    private final ObjectMapper objectMapper = new ObjectMapper();

    public String chat(String userId, String query) throws IOException {
        Map<String, Object> bodyMap = new HashMap<>();
        bodyMap.put("bot_id", botId);
        bodyMap.put("user", userId);
        bodyMap.put("query", query);
        bodyMap.put("stream", false);

        String jsonBody = objectMapper.writeValueAsString(bodyMap);
        RequestBody body = RequestBody.create(jsonBody, MediaType.get("application/json; charset=utf-8"));

        Request request = new Request.Builder()
                .url(baseUrl)
                .post(body)
                .addHeader("Authorization", "Bearer " + apiKey)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

            String responseBody = response.body().string();
            JsonNode rootNode = objectMapper.readTree(responseBody);
            
            // 解析 Coze API 返回的消息内容
            // 注意：根据 Coze API 的具体版本，解析逻辑可能需要调整
            return rootNode.path("messages").get(0).path("content").asText();
        }
    }
}
