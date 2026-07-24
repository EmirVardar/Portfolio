package com.emirvardar.website.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class YoutubeUrlParser {

    private static final Pattern VIDEO_ID_PATTERN = Pattern.compile(
            "(?:youtube\\.com/(?:watch\\?v=|embed/|shorts/)|youtu\\.be/)([A-Za-z0-9_-]{11})");

    /**
     * Extracts the 11-character video ID from a YouTube URL so only a validated ID
     * (never the raw, attacker-influenced URL) is ever stored or used to build an embed.
     */
    public String extractVideoId(String youtubeUrl) {
        if (!StringUtils.hasText(youtubeUrl)) {
            return null;
        }
        Matcher matcher = VIDEO_ID_PATTERN.matcher(youtubeUrl.trim());
        if (matcher.find()) {
            return matcher.group(1);
        }
        throw new IllegalArgumentException("Geçerli bir YouTube linki değil.");
    }
}
