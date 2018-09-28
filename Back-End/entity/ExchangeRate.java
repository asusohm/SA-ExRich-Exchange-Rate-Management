package com.example.exrichServer.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import lombok.NonNull;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class ExchangeRate {
    @Id
    @GeneratedValue
    @Column(name = "EXCHANGE_RATE_ID")
    private @NonNull Long exchangeRateID;
    @Column(precision=6, scale=2)
    private @NonNull Double bankNotesSelling;
    @Column(precision=6, scale=2)
    private @NonNull Double bankNotesBuying;

    @Temporal(TemporalType.DATE)
    private @NonNull Date date;

    @ManyToOne
    @JoinColumn(name = "CURRENCY_CODE",nullable = false)
    private Currency currency;


    @ManyToOne
    @JoinColumn(name = "PERSONAL_USER",nullable = false)
    private UpdateRateStaff updateRateStaff;

    public ExchangeRate() {
    }

    public ExchangeRate(Double bankNotesSelling, Double bankNotesBuying, Date date, Currency currency, UpdateRateStaff updateRateStaff) {
        this.bankNotesSelling = bankNotesSelling;
        this.bankNotesBuying = bankNotesBuying;
        this.date = date;
        this.currency = currency;
        this.updateRateStaff = updateRateStaff;
    }

    public Long getExchangeRateID() {
        return exchangeRateID;
    }

    public void setExchangeRateID(Long exchangeRateID) {
        this.exchangeRateID = exchangeRateID;
    }

    public Double getBankNotesSelling() {
        return bankNotesSelling;
    }

    public void setBankNotesSelling(Double bankNotesSelling) {
        this.bankNotesSelling = bankNotesSelling;
    }

    public Double getBankNotesBuying() {
        return bankNotesBuying;
    }

    public void setBankNotesBuying(Double bankNotesBuying) {
        this.bankNotesBuying = bankNotesBuying;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public UpdateRateStaff getUpdateRateStaff() {
        return updateRateStaff;
    }

    public void setUpdateRateStaff(UpdateRateStaff updateRateStaff) {
        this.updateRateStaff = updateRateStaff;
    }
}
