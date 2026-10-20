package devPilot.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import devPilot.backend.repository.TransactionRepository;
import devPilot.backend.entity.Transaction;
import devPilot.backend.entity.TransactionDashboardDTO;
import devPilot.backend.service.TransactionService;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id).orElse(null);
    }

    @Override
    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public Transaction updateTransaction(Long id, Transaction transaction) {

        Transaction existing = transactionRepository.findById(id).orElse(null);

        if (existing != null) {
            existing.setTransactionReference(transaction.getTransactionReference());
            existing.setAmount(transaction.getAmount());
            existing.setTransactionType(transaction.getTransactionType());
            existing.setStatus(transaction.getStatus());
            existing.setTransactionDate(transaction.getTransactionDate());

            return transactionRepository.save(existing);
        }

        return null;
    }

    @Override
    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }

    @Override
    public List<Transaction> getTransactionsByStatus(String status) {
        return transactionRepository.findByStatus(status);
    }

    @Override
    public Double getTotalAmount() {
        return transactionRepository.getTotalAmount();
    }

    @Override
    public Long getTransactionCount() {
        return transactionRepository.getTransactionCount();
    }

    @Override
    public Double getAverageAmount() {
        return transactionRepository.getAverageAmount();
    }

    @Override
    public List<Transaction> getHighValueTransactions(Double amount) {
        return transactionRepository.findHighValueTransactions(amount);
    }

    @Override
    public List<Transaction> getTransactionsByType(String type) {
        return transactionRepository.findByTransactionType(type);
    }

    @Override
    public Long getTransactionCountByStatus(String status) {
        return transactionRepository.getTransactionCountByStatus(status);
    }

    @Override
    public TransactionDashboardDTO getDashboardData() {

        Double totalAmount = transactionRepository.getTotalAmount();
        Long transactionCount = transactionRepository.getTransactionCount();
        Double averageAmount = transactionRepository.getAverageAmount();
        Long failedCount = transactionRepository.getTransactionCountByStatus("FAILED");

        return new TransactionDashboardDTO(
                totalAmount,
                transactionCount,
                averageAmount,
                failedCount
        );
    }
}