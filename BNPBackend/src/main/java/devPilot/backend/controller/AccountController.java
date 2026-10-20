package devPilot.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/accounts")
@Tag(name = "Account API", description = "Account Management APIs")
public class AccountController {

	@GetMapping
	@Operation(summary = "Get all accounts")
	public String getAccounts() {
		return "All Accounts";
	}

	@PostMapping
	@Operation(summary = "Create a new account")
	public String createAccount() {
		return "Account Created";
	}
}
