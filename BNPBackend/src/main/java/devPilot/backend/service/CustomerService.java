package devPilot.backend.service;


import org.springframework.stereotype.Service;

import devPilot.backend.entity.Customer;
import devPilot.backend.repository.CustomerRepository;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    public Customer getCustomerById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Customer saveCustomer(Customer customer) {
        return repository.save(customer);
    }

    public Customer updateCustomer(Long id, Customer customer) {
        Customer existing = repository.findById(id).orElseThrow();

        existing.setName(customer.getName());
        existing.setEmail(customer.getEmail());
        existing.setPhone(customer.getPhone());

        return repository.save(existing);
    }

    public void deleteCustomer(Long id) {
        repository.deleteById(id);
    }
}