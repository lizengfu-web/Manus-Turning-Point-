package com.turningpoint.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RootController {
    
    @GetMapping({"/", "/api", "/api/"})
    public Map<String, String> index() {
        Map<String, String> res = new HashMap<>();
        res.put("status", "ok");
        res.put("message", "Turning Point API is running");
        return res;
    }
}
