package com.turningpoint.api.controller;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.bean.WxMaJscode2SessionResult;
import com.turningpoint.api.entity.User;
import com.turningpoint.api.repository.UserRepository;
import com.turningpoint.api.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.Map;
import com.turningpoint.api.payload.UpdateUserProfileRequest;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    @Autowired
    private WxMaService wxMaService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PointService pointService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, Object> body) {
        System.out.println("[Login] Received request body: " + body);
        String code = (String) body.get("code");
        Map<String, Object> response = new HashMap<>();
        
        if (code == null || code.isEmpty()) {
            System.err.println("[Login] Error: code is missing");
            response.put("success", false);
            response.put("message", "code is missing");
            return response;
        }
        
        try {
            // 对 code 进行处理，防止包含空格等非法字符导致 URI 异常
            String cleanCode = code.trim().replace(" ", "");
            System.out.println("[Login] Calling WeChat API with code: " + cleanCode);
            WxMaJscode2SessionResult session = wxMaService.getUserService().getSessionInfo(cleanCode);
            String openid = session.getOpenid();
            
            Optional<User> userOptional = userRepository.findByOpenid(openid);
            User user;
            if (userOptional.isEmpty()) {
                user = new User();
                user.setOpenid(openid);
                userRepository.save(user);
                pointService.grantFirstLoginPoints(user); // 首次登录发放积分
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
            userMap.put("totalPoints", user.getTotalPoints());
            userMap.put("level", user.getLevel());
            
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

    @PostMapping("/user/updateProfile")
    public Map<String, Object> updateProfile(@RequestBody UpdateUserProfileRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            // 假设用户已经登录，并且可以通过某种方式获取到当前用户的ID或OpenID
            // 这里简化处理，直接通过 request 中的 openid 来查找用户
            // 实际应用中，应该从认证信息中获取当前用户ID
            String openid = request.getOpenid(); // 假设 request 中包含 openid
            if (openid == null || openid.isEmpty()) {
                response.put("success", false);
                response.put("message", "OpenID is missing");
                return response;
            }

            Optional<User> userOptional = userRepository.findByOpenid(openid);
            if (userOptional.isEmpty()) {
                response.put("success", false);
                response.put("message", "User not found");
                return response;
            }

            User user = userOptional.get();
            user.setNickname(request.getNickname());
            user.setAvatarUrl(request.getAvatarUrl());
            user.setGender(request.getGender());
            user.setCity(request.getCity());
            user.setProvince(request.getProvince());
            user.setCountry(request.getCountry());
            user.setOccupation(request.getOccupation());
            user.setIdentity(request.getIdentity());

            userRepository.save(user);

            response.put("success", true);
            response.put("message", "User profile updated successfully");
        } catch (Exception e) {
            System.err.println("[UpdateProfile] Exception occurred during profile update:");
            e.printStackTrace();
            response.put("success", false);
            response.put("message", e.getMessage());
        }
        return response;
    }
}
