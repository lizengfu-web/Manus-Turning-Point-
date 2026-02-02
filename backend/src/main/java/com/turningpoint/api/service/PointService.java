package com.turningpoint.api.service;

import com.turningpoint.api.entity.PointTransaction;
import com.turningpoint.api.entity.PointTransaction.TransactionType;
import com.turningpoint.api.entity.User;
import com.turningpoint.api.repository.PointTransactionRepository;
import com.turningpoint.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PointService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PointTransactionRepository pointTransactionRepository;

    // 积分规则配置
    private static final int FIRST_LOGIN_POINTS = 100;
    private static final int INVITE_FRIEND_POINTS = 50;
    private static final int POST_MESSAGE_POINTS = 10;
    private static final int AD_WATCH_POINTS = 5;
    private static final int DAILY_CHECK_IN_POINTS = 10;
    private static final int AI_INTERVIEW_CONSUME_POINTS = 20;
    private static final int AI_CONSULT_CONSUME_POINTS = 15;

    // 等级配置 (累计所需积分)
    private static final int[] LEVEL_POINTS = {0, 200, 500, 1000, 2000, 5000};

    @Transactional
    public User addPoints(User user, int points, String description) {
        user.setTotalPoints(user.getTotalPoints() + points);
        updateUserLevel(user);
        userRepository.save(user);

        PointTransaction transaction = new PointTransaction();
        transaction.setUser(user);
        transaction.setPoints(points);
        transaction.setType(TransactionType.EARN);
        transaction.setDescription(description);
        pointTransactionRepository.save(transaction);
        return user;
    }

    @Transactional
    public boolean consumePoints(User user, int points, String description) {
        if (user.getTotalPoints() < points) {
            return false; // 积分不足
        }
        user.setTotalPoints(user.getTotalPoints() - points);
        updateUserLevel(user);
        userRepository.save(user);

        PointTransaction transaction = new PointTransaction();
        transaction.setUser(user);
        transaction.setPoints(-points);
        transaction.setType(TransactionType.CONSUME);
        transaction.setDescription(description);
        pointTransactionRepository.save(transaction);
        return true;
    }

    private void updateUserLevel(User user) {
        int currentPoints = user.getTotalPoints();
        int currentLevel = user.getLevel();
        int newLevel = currentLevel;

        for (int i = LEVEL_POINTS.length - 1; i >= 0; i--) {
            if (currentPoints >= LEVEL_POINTS[i]) {
                newLevel = i + 1;
                break;
            }
        }
        user.setLevel(newLevel);
    }

    public List<PointTransaction> getPointTransactions(User user) {
        return pointTransactionRepository.findByUserOrderByCreatedAtDesc(user);
    }

    // ------------------ 积分获取方法 ------------------

    @Transactional
    public User grantFirstLoginPoints(User user) {
        // 检查是否已发放过首次登录积分
        // 实际项目中可能需要更复杂的逻辑来判断，例如在用户表中增加一个字段 `isFirstLoginAwarded`
        // 这里简化处理，假设每次调用都发放，实际应避免重复发放
        return addPoints(user, FIRST_LOGIN_POINTS, "首次登录奖励");
    }

    @Transactional
    public User grantInviteFriendPoints(User inviter, User invitedUser) {
        // 实际项目中需要验证 invitedUser 是否是首次登录且由 inviter 邀请
        return addPoints(inviter, INVITE_FRIEND_POINTS, "邀请好友奖励: " + invitedUser.getNickname());
    }

    @Transactional
    public User grantPostMessagePoints(User user) {
        // 实际项目中需要限制每日发帖积分获取上限
        return addPoints(user, POST_MESSAGE_POINTS, "发布社区消息奖励");
    }

    @Transactional
    public User grantAdWatchPoints(User user) {
        // 实际项目中需要限制每日观看广告积分获取上限
        return addPoints(user, AD_WATCH_POINTS, "观看激励广告奖励");
    }

    @Transactional
    public User grantDailyCheckInPoints(User user) {
        // 实际项目中需要实现每日打卡和连续打卡逻辑
        return addPoints(user, DAILY_CHECK_IN_POINTS, "每日打卡奖励");
    }

    // ------------------ 积分消耗方法 ------------------

    @Transactional
    public boolean consumeAiInterviewPoints(User user) {
        return consumePoints(user, AI_INTERVIEW_CONSUME_POINTS, "AI 面试消耗");
    }

    @Transactional
    public boolean consumeAiConsultPoints(User user) {
        return consumePoints(user, AI_CONSULT_CONSUME_POINTS, "AI 咨询消耗");
    }
}
