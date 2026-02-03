package com.turningpoint.api.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String openid;

    private String nickname;
    private String avatarUrl;
    private String gender;
    private String city;
    private String province;
    private String country;
    private String occupation;
    private String identity;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Integer totalPoints = 0;
    private Integer level = 1;

    @PrePersist
    protected void onCreate() {
        if (totalPoints == null) { totalPoints = 0; }
        if (level == null) { level = 1; }
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
