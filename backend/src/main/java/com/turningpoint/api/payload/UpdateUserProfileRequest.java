package com.turningpoint.api.payload;

import lombok.Data;

@Data
public class UpdateUserProfileRequest {
    private String openid;
    private String nickname;
    private String avatarUrl;
    private String gender;
    private String city;
    private String province;
    private String country;
    private String occupation;
    private String identity;
}
