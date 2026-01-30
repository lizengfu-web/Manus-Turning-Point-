package com.turningpoint.api.controller;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.bean.WxMaJscode2SessionResult;
import com.turningpoint.api.entity.User;
import com.turningpoint.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private WxMaService wxMaService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        String code = body.get("code");
        Map<String, Object> response = new HashMap<>();
        
        try {
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
            response.put("openid", openid);
            response.put("userId", user.getId());
            // 在实际项目中，这里应该生成并返回一个 JWT token
            response.put("token", "mock-jwt-token-" + openid);
            
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
        }
        
        return response;
    }
}
