package com.turningpoint.api.controller;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.bean.WxMaJscode2SessionResult;
import com.turningpoint.api.entity.User;
import com.turningpoint.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    @Autowired
    private WxMaService wxMaService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        System.out.println("[Login] Received request body: " + body);
        String code = body.get("code");
        Map<String, Object> response = new HashMap<>();
        
        if (code == null || code.isEmpty()) {
            System.err.println("[Login] Error: code is missing");
            response.put("success", false);
            response.put("message", "code is missing");
            return response;
        }
        
        try {
            System.out.println("[Login] Calling WeChat API with code: " + code);
            WxMaJscode2SessionResult session = wxMaService.getUserService().getSessionInfo(code);
            String openid = session.getOpenid();
            
            Optional<User> userOptional = userRepository.findByOpenid(openid);
            User user;
            if (userOptional.isEmpty()) {
                user = new User();
                user.setOpenid(openid);
                userRepository.save(user);
            } else {
                user = userOptional.get();
            }
            
            response.put("success", true);
            Map<String, Object> data = new HashMap<>();
            data.put("token", "mock-jwt-token-" + openid);
            
            Map<String, Object> userMap = new HashMap<>();
            userMap.put("id", user.getId());
            userMap.put("openId", openid);
            userMap.put("nickName", user.getNickname() != null ? user.getNickname() : "微信用户");
            userMap.put("avatarUrl", user.getAvatarUrl() != null ? user.getAvatarUrl() : "");
            userMap.put("userType", "normal");
            
            data.put("user", userMap);
            response.put("data", data);
            
        } catch (Exception e) {
            System.err.println("[Login] Exception occurred during login:");
            e.printStackTrace();
            response.put("success", false);
            response.put("message", e.getMessage());
        }
        
        return response;
    }
}
