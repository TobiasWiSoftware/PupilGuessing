package com.example.PupilGuessing.Repositories;

import com.example.PupilGuessing.Entities.PlayerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPlayerRepository extends JpaRepository<PlayerEntity, Integer>{


}
