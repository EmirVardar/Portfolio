package com.emirvardar.website.controller;

import com.emirvardar.website.entity.Urun;
import com.emirvardar.website.repository.UrunRepository;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/urunler")
public class UrunController {

    private final UrunRepository repository;

    public UrunController(UrunRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Urun> hepsiniGetir() {
        return repository.findAll();
    }

    @PostMapping
    public Urun ekle(@RequestBody Urun urun) {
        return repository.save(urun);
    }

    @DeleteMapping("/{id}")
    public void sil(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
