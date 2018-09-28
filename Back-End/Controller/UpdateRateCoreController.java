package com.example.exrichServer.Controller;

import com.example.exrichServer.Repository.CountryRepository;
import com.example.exrichServer.Repository.CurrencyRepository;
import com.example.exrichServer.Repository.ExchangeRateRepository;
import com.example.exrichServer.Repository.UpdateExchangeRateStaffRepository;
import com.example.exrichServer.entity.Country;
import com.example.exrichServer.entity.Currency;
import com.example.exrichServer.entity.ExchangeRate;
import com.example.exrichServer.entity.UpdateRateStaff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Comparator;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UpdateRateCoreController {


    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private CurrencyRepository currencyRepository;

    @Autowired
    private ExchangeRateRepository exchangeRateRepository;

    @Autowired
    private UpdateExchangeRateStaffRepository updateExchangeRateStaffRepository;
    // --------------- Country ------------------

    @GetMapping(path ="/countrys", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Country> getCountry(){
        return countryRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping(path ="/country/{countryCode}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Country getOneCountry(@PathVariable String countryCode){
        return countryRepository.findById(countryCode).get();
    }


    // Currency
    @GetMapping(path ="/currency", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Currency> getCurrency(){
        return currencyRepository.findAll().stream().collect(Collectors.toList());

    }

    @GetMapping(path ="/currencyone/{currencyCo}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Currency getOneCurrency(@PathVariable String currencyCo){
        return currencyRepository.findById(currencyCo).get();
    }


    // Exchange-Rate
    @GetMapping(path = "/exchange-rate-last")
    public Collection<ExchangeRate> getExchangeRatesLast(){
        exchangeRateRepository.findAll().stream().sorted(Comparator.comparing(ExchangeRate::getDate).reversed()).limit(10L).forEach(e -> System.out.println( e.getExchangeRateID()+" " + e.getDate()));
        System.out.println();
        return exchangeRateRepository.findAll().stream().sorted(Comparator.comparing(ExchangeRate::getDate).reversed()).limit(10L).collect(Collectors.toList());
    }

    @GetMapping(path ="/exchange-rate", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<ExchangeRate> getExchangeRate(){
        return exchangeRateRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping(path ="exchange-rate/{exrateone}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ExchangeRate getOneExchangeRate(@PathVariable Long exrateone){
        return exchangeRateRepository.findById(exrateone).get();
    }

    @PutMapping(path ="exchange-rate/{id}")
    public ExchangeRate putExchangeRate(@RequestBody ExchangeRate newExchangeRate, @PathVariable Long id){
        return exchangeRateRepository.findById(id).map(exchangeRate ->{
                    exchangeRate.setBankNotesBuying(newExchangeRate.getBankNotesBuying());
                    exchangeRate.setBankNotesSelling(newExchangeRate.getBankNotesSelling());
                    exchangeRate.setDate(newExchangeRate.getDate());
                    return exchangeRateRepository.save(exchangeRate);
                }
                ).orElseGet(() ->{
                    return exchangeRateRepository.save(newExchangeRate);
        });
    }

    @PostMapping(path ="/exchange-rate", produces = MediaType.APPLICATION_JSON_VALUE)
    ExchangeRate newExchangeRate(@RequestBody ExchangeRate exchangeRate){
        return exchangeRateRepository.save(exchangeRate);
    }
    @DeleteMapping(path ="exchange-rate/{id}")
    void deleteExchangeRate(@PathVariable Long id){
        exchangeRateRepository.deleteById(id);
    }
    @GetMapping(path ="/update-rate-staff", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<UpdateRateStaff> getUpdateRateStaff(){
        return updateExchangeRateStaffRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping(path ="/update-rate-staff/{update}", produces = MediaType.APPLICATION_JSON_VALUE)
    public UpdateRateStaff getOneUpdateExchangeRateStaff(@PathVariable String update){
        return updateExchangeRateStaffRepository.findById(update).get();
    }
}
