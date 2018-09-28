package com.example.exrichServer.entity;
import lombok.Data;
import lombok.NonNull;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Currency {
    @Id
    @Column(name = "CURRENCY_CODE")
    private @NonNull String currencyCode;
    private @NonNull String currencyName;


    // OneToMany with Country
    // OneToMany with ExchangeRate

    @ManyToOne
    @JoinColumn(name = "COUNTRY_CODE", nullable=false)
    private Country country;

    public Currency() {
    }

    public Currency(String currencyCode, String currencyName, Country country) {
        this.currencyCode = currencyCode;
        this.currencyName = currencyName;
        this.country = country;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    public String getCurrencyName() {
        return currencyName;
    }

    public void setCurrencyName(String currencyName)
    {
        this.currencyName = currencyName;
    }


}
