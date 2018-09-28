package com.example.exrichServer;

import com.example.exrichServer.Repository.CountryRepository;
import com.example.exrichServer.Repository.CurrencyRepository;
import com.example.exrichServer.Repository.ExchangeRateRepository;
import com.example.exrichServer.Repository.UpdateExchangeRateStaffRepository;
import com.example.exrichServer.entity.Country;
import com.example.exrichServer.entity.Currency;
import com.example.exrichServer.entity.ExchangeRate;
import com.example.exrichServer.entity.UpdateRateStaff;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import java.util.Date;

@SpringBootApplication
public class ExrichServerApplication {


	@Autowired
	private CurrencyRepository currencyRepository;
	@Autowired
	private CountryRepository countryRepository;
	@Autowired
	private ExchangeRateRepository exchangeRateRepository;
	@Autowired
	private UpdateExchangeRateStaffRepository updateExchangeRateStaffRepository;



	public static void main(String[] args) {
		SpringApplication.run(ExrichServerApplication.class, args);
	}


	@Component
	class DataSetup implements ApplicationRunner{
		@Override
		public void run(ApplicationArguments args) throws Exception {
            Date date = new Date();
            Country country = new Country("12","United State");
			Currency usd1 = new Currency("USD:1","US Dollar",country);
            Currency usd5 = new Currency("USD:5","US Dollar",country);
            Currency usd50 = new Currency("USD:50","US Dollar",country);
            UpdateRateStaff staff_admin = new UpdateRateStaff("admin","admin","Sivarut Chuncharoen");
			ExchangeRate usd1Rate = new ExchangeRate(31.25,32.55,date,usd1,staff_admin);
            ExchangeRate usd5Rate = new ExchangeRate(31.60,32.60,date,usd5,staff_admin);
            ExchangeRate usd50Rate = new ExchangeRate(32.00,32.60,date,usd50,staff_admin);
            countryRepository.save(country);
            currencyRepository.save(usd1);
			currencyRepository.save(usd5);
			currencyRepository.save(usd50);


			updateExchangeRateStaffRepository.save(staff_admin);
			exchangeRateRepository.save(usd1Rate);
            exchangeRateRepository.save(usd5Rate);
            exchangeRateRepository.save(usd50Rate);


		}
	}





}
