package devPilot.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import devPilot.backend.service.TransactionService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import devPilot.backend.entity.Transaction;
import devPilot.backend.entity.TransactionDashboardDTO;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
	@Autowired
	private TransactionService transactionService;
	
	@GetMapping
	public List<Transaction> getAllTransactions() {
	    return transactionService.getAllTransactions();
	}
	
	@PostMapping
	public Transaction createTransaction(@RequestBody Transaction transaction) {
	    return transactionService.createTransaction(transaction);
	}
	
	@GetMapping("/{id}")
	public Transaction getTransactionById(@PathVariable Long id) {
	    return transactionService.getTransactionById(id);
	}
	
	@GetMapping("/status/{status}")
	public List<Transaction> getTransactionsByStatus(@PathVariable String status) {
	    return transactionService.getTransactionsByStatus(status);
	}
	
	@GetMapping("/total")
	public Double getTotalAmount() {
	    return transactionService.getTotalAmount();
	}
	
	@GetMapping("/count")
	public Long getTransactionCount() {
	    return transactionService.getTransactionCount();
	}
	
	@GetMapping("/average")
	public Double getAverageAmount() {
	    return transactionService.getAverageAmount();
	}
	
	@GetMapping("/high-value")
	public List<Transaction> getHighValueTransactions(
	        @RequestParam Double amount) {
	    return transactionService.getHighValueTransactions(amount);
	}
	
	@GetMapping("/type/{type}")
	public List<Transaction> getTransactionsByType(@PathVariable String type) {
	    return transactionService.getTransactionsByType(type);
	}
	
	@GetMapping("/dashboard")
	public TransactionDashboardDTO getDashboardData() {
	    return transactionService.getDashboardData();
	}
	
	@PutMapping("/{id}")
	public Transaction updateTransaction(
	        @PathVariable Long id,
	        @RequestBody Transaction transaction) {

	    return transactionService.updateTransaction(id, transaction);
	}
	
	@DeleteMapping("/{id}")
	public void deleteTransaction(@PathVariable Long id) {
	    transactionService.deleteTransaction(id);
	}

}