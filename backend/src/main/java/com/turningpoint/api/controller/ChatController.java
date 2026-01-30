package com.turningpoint.api.controller;

import com.turningpoint.api.service.CozeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ChatController {

    @Autowired
    private CozeService cozeService;

    @PostMapping("/send")
    public Map<String, Object> sendMessage(@RequestBody Map<String, String> body) {
        String userId = body.get("userId");
        String message = body.get("message");
        Map<String, Object> response = new HashMap<>();

        try {
            String reply = cozeService.chat(userId, message);
            response.put("success", true);
            response.put("reply", reply);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
        }

        return response;
    }
}
