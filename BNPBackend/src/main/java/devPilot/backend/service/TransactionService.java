package devPilot.backend.service;

import java.util.List;
import devPilot.backend.entity.Transaction;
import devPilot.backend.entity.TransactionDashboardDTO;

public interface TransactionService {

    List<Transaction> getAllTransactions();

    Transaction getTransactionById(Long id);

    Transaction createTransaction(Transaction transaction);

    Transaction updateTransaction(Long id, Transaction transaction);

    void deleteTransaction(Long id);

    List<Transaction> getTransactionsByStatus(String status);

    Double getTotalAmount();

    Long getTransactionCount();

    Double getAverageAmount();

    List<Transaction> getHighValueTransactions(Double amount);

    List<Transaction> getTransactionsByType(String type);

    Long getTransactionCountByStatus(String status);

    TransactionDashboardDTO getDashboardData();
}