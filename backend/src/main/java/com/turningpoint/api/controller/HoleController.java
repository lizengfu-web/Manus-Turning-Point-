package com.turningpoint.api.controller;

import com.turningpoint.api.entity.Post;
import com.turningpoint.api.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/hole")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HoleController {

    @Autowired
    private PostService postService;

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> getPostList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int pageSize) {
        Page<Post> postPage = postService.getPostList(page, pageSize);
        Map<String, Object> response = new HashMap<>();
        response.put("posts", postPage.getContent());
        response.put("total", postPage.getTotalElements());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/create")
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        Post createdPost = postService.createPost(post);
        return ResponseEntity.ok(createdPost);
    }

    @PostMapping("/like")
    public ResponseEntity<Post> likePost(@RequestBody Map<String, Long> payload) {
        Long postId = payload.get("postId");
        Post updatedPost = postService.likePost(postId);
        if (updatedPost != null) {
            return ResponseEntity.ok(updatedPost);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/unlike")
    public ResponseEntity<Post> unlikePost(@RequestBody Map<String, Long> payload) {
        Long postId = payload.get("postId");
        Post updatedPost = postService.unlikePost(postId);
        if (updatedPost != null) {
            return ResponseEntity.ok(updatedPost);
        }
        return ResponseEntity.notFound().build();
    }
}
