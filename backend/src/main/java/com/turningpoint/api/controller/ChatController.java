package com.turningpoint.api.controller;

import com.turningpoint.api.service.CozeService;
import com.turningpoint.api.service.PointService;
import com.turningpoint.api.repository.UserRepository;
import com.turningpoint.api.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ChatController {

    @Autowired
    private CozeService cozeService;

    @Autowired
    private PointService pointService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/send")
    public Map<String, Object> sendMessage(@RequestBody Map<String, String> body) {
        String userIdStr = body.get("userId");
        String message = body.get("message");
        Map<String, Object> response = new HashMap<>();

        if (userIdStr == null || userIdStr.isEmpty()) {
            response.put("success", false);
            response.put("message", "用户ID缺失");
            return response;
        }

        try {
            Long userId = Long.parseLong(userIdStr);
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("用户未找到"));

            // 消耗 AI 咨询积分
            if (!pointService.consumeAiConsultPoints(user)) {
                response.put("success", false);
                response.put("message", "积分不足，无法进行 AI 咨询");
                return response;
            }

            // 原有逻辑：调用 Coze 服务获取回复
            String reply = cozeService.chat(userIdStr, message);
            response.put("success", true);
            response.put("reply", reply);
        } catch (NumberFormatException e) {
            response.put("success", false);
            response.put("message", "用户ID格式错误");
        } catch (RuntimeException e) {
            response.put("success", false);
            response.put("message", e.getMessage());
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
        }

        return response;
    }
}
