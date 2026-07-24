package com.emirvardar.website.dto;

import java.time.Instant;
import java.util.List;

public record PostDetailDto(
        Long id,
        String title,
        String content,
        String youtubeVideoId,
        List<String> imageUrls,
        List<CommentDto> comments,
        Instant createdAt) {
}
