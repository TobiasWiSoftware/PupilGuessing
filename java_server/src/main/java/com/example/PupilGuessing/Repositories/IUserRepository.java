package com.example.PupilGuessing.Repositories;

import com.example.PupilGuessing.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<UserEntity, Integer>{


}
