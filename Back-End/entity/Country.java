package com.example.exrichServer.entity;

import lombok.Data;
import lombok.NonNull;
import javax.persistence.*;


@Entity
@Data
public class Country {
    @Id
    @Column(name = "COUNTRY_CODE")
    private @NonNull String countryCode;
    private @NonNull String countryName;

   /* @ManyToOne
    @JoinColumn(name = "CURRENCY_CODE", nullable=false)
    private Currency currency;*/

    public Country() {
    }

    public Country(String countryCode, String countryName) {
        this.countryCode = countryCode;
        this.countryName = countryName;

    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }


}
