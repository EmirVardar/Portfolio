package com.emirvardar.website.repository;

import com.emirvardar.website.entity.Urun;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UrunRepository extends JpaRepository<Urun, Long> {
}
