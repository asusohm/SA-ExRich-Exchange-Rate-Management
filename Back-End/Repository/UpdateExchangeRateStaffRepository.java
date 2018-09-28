package com.example.exrichServer.Repository;


import com.example.exrichServer.entity.UpdateRateStaff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestController
@EnableJpaRepositories
@CrossOrigin(origins = "http://localhost:4200")
public interface UpdateExchangeRateStaffRepository extends JpaRepository<UpdateRateStaff,String> {
}
