package devPilot.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import devPilot.backend.entity.Customer;

public interface CustomerRepository
        extends JpaRepository<Customer, Long> {

    Optional<Customer> findByEmail(String email);

    Optional<Customer> findByAccountNumber(String accountNumber);

    Optional<Customer> findByUserId(Long userId);
}