package com.example.PupilGuessing.Services;

import com.example.PupilGuessing.Entities.PupilEntity;
import com.example.PupilGuessing.Entities.PlayerEntity;



// Entkoppeln der Services von der Implementierung
public interface IMainService {
    public PupilEntity getRandomPupil();

    public Iterable<PupilEntity> getPupils();

    public PupilEntity setPupil(PupilEntity pupil);

    public PlayerEntity setUser(PlayerEntity user);

    public Iterable<PlayerEntity> getPlayers();
}
