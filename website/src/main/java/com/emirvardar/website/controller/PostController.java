package com.emirvardar.website.controller;

import com.emirvardar.website.dto.CommentDto;
import com.emirvardar.website.dto.PostDetailDto;
import com.emirvardar.website.dto.PostSummaryDto;
import com.emirvardar.website.entity.Post;
import com.emirvardar.website.entity.PostImage;
import com.emirvardar.website.repository.CommentRepository;
import com.emirvardar.website.repository.PostRepository;
import com.emirvardar.website.service.FileStorageService;
import com.emirvardar.website.service.YoutubeUrlParser;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final FileStorageService fileStorageService;
    private final YoutubeUrlParser youtubeUrlParser;

    public PostController(PostRepository postRepository,
                           CommentRepository commentRepository,
                           FileStorageService fileStorageService,
                           YoutubeUrlParser youtubeUrlParser) {
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
        this.fileStorageService = fileStorageService;
        this.youtubeUrlParser = youtubeUrlParser;
    }

    @GetMapping
    public List<PostSummaryDto> list() {
        return postRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(post -> new PostSummaryDto(
                        post.getId(),
                        post.getTitle(),
                        post.getContent(),
                        post.getImages().isEmpty() ? null : post.getImages().get(0).getUrl(),
                        commentRepository.countByPostId(post.getId()),
                        post.getCreatedAt()))
                .toList();
    }

    @GetMapping("/{id}")
    public PostDetailDto get(@PathVariable Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        List<String> imageUrls = post.getImages().stream().map(PostImage::getUrl).toList();
        List<CommentDto> comments = commentRepository.findByPostIdOrderByCreatedAtAsc(id).stream()
                .map(c -> new CommentDto(c.getId(), c.getAuthorName(), c.getContent(), c.getCreatedAt()))
                .toList();

        return new PostDetailDto(post.getId(), post.getTitle(), post.getContent(),
                post.getYoutubeVideoId(), imageUrls, comments, post.getCreatedAt());
    }

    @PostMapping
    public PostDetailDto create(@RequestParam String title,
                                 @RequestParam String content,
                                 @RequestParam(required = false) String youtubeUrl,
                                 @RequestParam(value = "images", required = false) List<MultipartFile> images) {
        Post post = new Post();
        post.setTitle(title);
        post.setContent(content);
        post.setYoutubeVideoId(youtubeUrlParser.extractVideoId(youtubeUrl));

        if (images != null) {
            int order = 0;
            for (MultipartFile file : images) {
                if (file.isEmpty()) {
                    continue;
                }
                PostImage image = new PostImage();
                image.setUrl(fileStorageService.store(file));
                image.setSortOrder(order++);
                image.setPost(post);
                post.getImages().add(image);
            }
        }

        Post saved = postRepository.save(post);
        return get(saved.getId());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        postRepository.deleteById(id);
    }
}
