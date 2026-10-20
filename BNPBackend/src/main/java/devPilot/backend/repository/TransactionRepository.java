package devPilot.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import devPilot.backend.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findByStatus(String status);

    @Query("SELECT SUM(t.amount) FROM Transaction t")
    Double getTotalAmount();
    
    @Query("SELECT COUNT(t) FROM Transaction t")
    Long getTransactionCount();
    
    @Query("SELECT AVG(t.amount) FROM Transaction t")
    Double getAverageAmount();
    
    @Query("SELECT t FROM Transaction t WHERE t.amount > :amount")
    List<Transaction> findHighValueTransactions(@Param("amount") Double amount);
    
    @Query("SELECT t FROM Transaction t WHERE t.transactionType = :type")
    List<Transaction> findByTransactionType(@Param("type") String type);
    
    @Query("SELECT COUNT(t) FROM Transaction t WHERE t.status = :status")
    Long getTransactionCountByStatus(@Param("status") String status);
}