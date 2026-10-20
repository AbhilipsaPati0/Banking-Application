package devPilot.backend.security;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import devPilot.backend.entity.Role;
import devPilot.backend.entity.User;
import devPilot.backend.repository.UserRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner createUsers(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        return args -> {

            if (userRepository.findByEmail("admin@bnp.com").isEmpty()) {

                User admin = new User(
                        "BNP Admin",
                        "admin@bnp.com",
                        passwordEncoder.encode("admin123"),
                        Role.ADMIN
                );

                userRepository.save(admin);
            }

            if (userRepository.findByEmail("employee@bnp.com").isEmpty()) {

                User employee = new User(
                        "BNP Employee",
                        "employee@bnp.com",
                        passwordEncoder.encode("employee123"),
                        Role.EMPLOYEE
                );

                userRepository.save(employee);
            }

            if (userRepository.findByEmail("customer@bnp.com").isEmpty()) {

                User customer = new User(
                        "BNP Customer",
                        "customer@bnp.com",
                        passwordEncoder.encode("customer123"),
                        Role.CUSTOMER
                );

                userRepository.save(customer);
            }

        };
    }
}
