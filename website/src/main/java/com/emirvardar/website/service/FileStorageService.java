package com.emirvardar.website.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageService {

    private final Path uploadDir;

    public FileStorageService(@Value("${app.upload-dir}") String uploadDir) throws IOException {
        this.uploadDir = Path.of(uploadDir);
        Files.createDirectories(this.uploadDir);
    }

    public String store(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Boş dosya yüklenemez.");
        }
        String contentType = file.getContentType();
        if (contentType == null || !contentType.startsWith("image/")) {
            throw new IllegalArgumentException("Sadece resim dosyaları yüklenebilir.");
        }

        String extension = StringUtils.getFilenameExtension(file.getOriginalFilename());
        String filename = UUID.randomUUID() + (extension != null ? "." + extension : "");
        Path target = uploadDir.resolve(filename).normalize();

        if (!target.getParent().equals(uploadDir)) {
            throw new IllegalArgumentException("Geçersiz dosya adı.");
        }

        try {
            file.transferTo(target);
        } catch (IOException e) {
            throw new RuntimeException("Dosya kaydedilemedi.", e);
        }

        return "/api/uploads/" + filename;
    }
}
