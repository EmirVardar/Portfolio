package com.emirvardar.website.controller;

import com.emirvardar.website.dto.CommentDto;
import com.emirvardar.website.entity.Comment;
import com.emirvardar.website.entity.Post;
import com.emirvardar.website.repository.CommentRepository;
import com.emirvardar.website.repository.PostRepository;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/posts/{postId}/comments")
public class CommentController {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    public CommentController(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    public record CommentRequest(String authorName, String content) {
    }

    @GetMapping
    public List<CommentDto> list(@PathVariable Long postId) {
        return commentRepository.findByPostIdOrderByCreatedAtAsc(postId).stream()
                .map(c -> new CommentDto(c.getId(), c.getAuthorName(), c.getContent(), c.getCreatedAt()))
                .toList();
    }

    @PostMapping
    public CommentDto create(@PathVariable Long postId, @RequestBody CommentRequest request) {
        if (!StringUtils.hasText(request.content())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Yorum boş olamaz.");
        }
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        Comment comment = new Comment();
        comment.setPost(post);
        comment.setAuthorName(StringUtils.hasText(request.authorName()) ? request.authorName() : "Anonim");
        comment.setContent(request.content());

        Comment saved = commentRepository.save(comment);
        return new CommentDto(saved.getId(), saved.getAuthorName(), saved.getContent(), saved.getCreatedAt());
    }
}
