package com.example.PupilGuessing.Entities;

// Create the UserEntity like PupilEntity

import jakarta.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "players")
public class PlayerEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Id")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "nick_name")
    private String nickname;
    @Basic(optional = false)
    @Column(name = "points")
    private Integer points;

    public PlayerEntity() {
    }

    public PlayerEntity(Integer id) {
        this.id = id;
    }

    public PlayerEntity(Integer id, String nickname, Integer points) {
        this.id = id;
        this.nickname = nickname;
        this.points = points;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }
}
