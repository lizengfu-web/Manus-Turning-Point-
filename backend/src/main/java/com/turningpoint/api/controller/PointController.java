package com.turningpoint.api.controller;

import com.turningpoint.api.entity.PointTransaction;
import com.turningpoint.api.entity.User;
import com.turningpoint.api.repository.UserRepository;
import com.turningpoint.api.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/points")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PointController {

    @Autowired
    private PointService pointService;

    @Autowired
    private UserRepository userRepository;

    // 假设通过 JWT 获取当前用户ID
    private User getCurrentUser(Principal principal) {
        if (principal == null) {
            throw new RuntimeException("User not authenticated");
        }
        // 在实际应用中，这里需要根据 principal 获取用户ID，然后从数据库加载用户
        // 暂时使用 mock 用户ID，或者从 AuthController 的逻辑中获取 openid
        // 为了简化，这里假设 principal.getName() 返回 openid
        String openid = principal.getName();
        return userRepository.findByOpenid(openid)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PostMapping("/checkin")
    public ResponseEntity<Map<String, Object>> dailyCheckIn(Principal principal) {
        try {
            User user = getCurrentUser(principal);
            User updatedUser = pointService.grantDailyCheckInPoints(user);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "每日打卡成功！");
            response.put("currentPoints", updatedUser.getTotalPoints());
            response.put("currentLevel", updatedUser.getLevel());
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }

    @GetMapping("/transactions")
    public ResponseEntity<List<PointTransaction>> getPointTransactions(Principal principal) {
        try {
            User user = getCurrentUser(principal);
            List<PointTransaction> transactions = pointService.getPointTransactions(user);
            return ResponseEntity.ok(transactions);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // TODO: 邀请好友接口需要更复杂的逻辑，包括生成邀请码，验证被邀请人等
    // @PostMapping("/invite")
    // public ResponseEntity<Map<String, Object>> inviteFriend(Principal principal, @RequestBody Map<String, String> body) {
    //     try {
    //         User inviter = getCurrentUser(principal);
    //         String invitedOpenid = body.get("invitedOpenid"); // 假设前端传递被邀请人的 openid
    //         Optional<User> invitedUserOptional = userRepository.findByOpenid(invitedOpenid);
    //         if (invitedUserOptional.isPresent()) {
    //             User invitedUser = invitedUserOptional.get();
    //             User updatedInviter = pointService.grantInviteFriendPoints(inviter, invitedUser);
    //             Map<String, Object> response = new HashMap<>();
    //             response.put("success", true);
    //             response.put("message", "邀请好友成功！");
    //             response.put("currentPoints", updatedInviter.getTotalPoints());
    //             return ResponseEntity.ok(response);
    //         } else {
    //             throw new RuntimeException("被邀请用户不存在");
    //         }
    //     } catch (RuntimeException e) {
    //         Map<String, Object> errorResponse = new HashMap<>();
    //         errorResponse.put("success", false);
    //         errorResponse.put("message", e.getMessage());
    //         return ResponseEntity.badRequest().body(errorResponse);
    //     }
    // }
}
