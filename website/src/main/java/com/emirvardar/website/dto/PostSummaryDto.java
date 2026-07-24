package com.emirvardar.website.dto;

import java.time.Instant;

public record PostSummaryDto(
        Long id,
        String title,
        String content,
        String coverImageUrl,
        long commentCount,
        Instant createdAt) {
}
