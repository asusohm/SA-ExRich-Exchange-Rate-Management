package com.example.exrichServer.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import lombok.NonNull;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Entity
@Data
public class UpdateRateStaff {
    @Id
    @Column(name = "PERSONAL_USER")
    private @NonNull String personalUser;
    private @NonNull String personalPass;
    private @NonNull String personalName;


    // OneToMany with Exchange Rate

    public UpdateRateStaff() {
    }

    public UpdateRateStaff(String personalUser, String personalPass, String personalName) {
        this.personalUser = personalUser;
        this.personalPass = personalPass;
        this.personalName = personalName;
    }


    public String getPersonalUser() {
        return personalUser;
    }

    public void setPersonalUser(String personalUser) {
        this.personalUser = personalUser;
    }

    public String getPersonalPass() {
        return personalPass;
    }

    public void setPersonalPass(String personalPass) {
        this.personalPass = personalPass;
    }

    public String getPersonalName() {
        return personalName;
    }

    public void setPersonalName(String personalName) {
        this.personalName = personalName;
    }


}
