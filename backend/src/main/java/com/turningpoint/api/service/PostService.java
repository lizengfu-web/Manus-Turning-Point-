package com.turningpoint.api.service;

import com.turningpoint.api.entity.Post;
import com.turningpoint.api.repository.PostRepository;
import com.turningpoint.api.repository.UserRepository;
import com.turningpoint.api.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PointService pointService;

    @Autowired
    private UserRepository userRepository;

    public Post createPost(Post post) {
        Post savedPost = postRepository.save(post);
        userRepository.findById(post.getAuthorId()).ifPresent(user -> {
            pointService.grantPostMessagePoints(user);
        });
        return savedPost;
    }

    public Page<Post> getPostList(int page, int pageSize) {
        Pageable pageable = PageRequest.of(page, pageSize, Sort.by("createdAt").descending());
        return postRepository.findAll(pageable);
    }

    public Optional<Post> getPostById(Long id) {
        return postRepository.findById(id);
    }

    public Post updatePost(Post post) {
        return postRepository.save(post);
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    public Post likePost(Long postId) {
        Optional<Post> postOptional = postRepository.findById(postId);
        if (postOptional.isPresent()) {
            Post post = postOptional.get();
            post.setLikeCount(post.getLikeCount() + 1);
            return postRepository.save(post);
        }
        return null;
    }

    public Post unlikePost(Long postId) {
        Optional<Post> postOptional = postRepository.findById(postId);
        if (postOptional.isPresent()) {
            Post post = postOptional.get();
            if (post.getLikeCount() > 0) {
                post.setLikeCount(post.getLikeCount() - 1);
            }
            return postRepository.save(post);
        }
        return null;
    }
}
