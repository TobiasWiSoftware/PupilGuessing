package com.example.PupilGuessing.Services;

import com.example.PupilGuessing.Entities.PupilEntity;
import com.example.PupilGuessing.Entities.UserEntity;



// Entkoppeln der Services von der Implementierung
public interface IMainService {
    public PupilEntity getRandomPupil();

    public PupilEntity setPupil(PupilEntity pupil);

    public UserEntity setUser(UserEntity user);
}
