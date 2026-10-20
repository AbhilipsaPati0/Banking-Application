package devPilot.backend.service;

import java.util.List;

import devPilot.backend.dto.RegisterRequest;
import devPilot.backend.entity.User;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(Long id);

    User getUserByEmail(String email);

    User createUser(User user);

    User updateUser(Long id, User user);

    void deleteUser(Long id);

    User registerCustomer(RegisterRequest request);
}