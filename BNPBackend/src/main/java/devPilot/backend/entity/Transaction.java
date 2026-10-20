package devPilot.backend.entity;

import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String transactionReference;
    private Double amount;
    private String transactionType;
    private String status;
    private LocalDate transactionDate;

    // ML / Fraud Detection Features
    private int transactionHour;
    private int transactionFrequency;
    private int failedAttempts;
    private int international;
    private int accountAgeDays;
    private int deviceChanged;
    private int previousFraud;
    private int merchantRisk;

    public Transaction() {
    }

    // ID
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Transaction Reference
    public String getTransactionReference() {
        return transactionReference;
    }

    public void setTransactionReference(String transactionReference) {
        this.transactionReference = transactionReference;
    }

    // Amount
    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    // Transaction Type
    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    // Status
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // Transaction Date
    public LocalDate getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
    }

    // Transaction Hour
    public int getTransactionHour() {
        return transactionHour;
    }

    public void setTransactionHour(int transactionHour) {
        this.transactionHour = transactionHour;
    }

    // Transaction Frequency
    public int getTransactionFrequency() {
        return transactionFrequency;
    }

    public void setTransactionFrequency(int transactionFrequency) {
        this.transactionFrequency = transactionFrequency;
    }

    // Failed Attempts
    public int getFailedAttempts() {
        return failedAttempts;
    }

    public void setFailedAttempts(int failedAttempts) {
        this.failedAttempts = failedAttempts;
    }

    // International
    public int getInternational() {
        return international;
    }

    public void setInternational(int international) {
        this.international = international;
    }

    // Account Age
    public int getAccountAgeDays() {
        return accountAgeDays;
    }

    public void setAccountAgeDays(int accountAgeDays) {
        this.accountAgeDays = accountAgeDays;
    }

    // Device Changed
    public int getDeviceChanged() {
        return deviceChanged;
    }

    public void setDeviceChanged(int deviceChanged) {
        this.deviceChanged = deviceChanged;
    }

    // Previous Fraud
    public int getPreviousFraud() {
        return previousFraud;
    }

    public void setPreviousFraud(int previousFraud) {
        this.previousFraud = previousFraud;
    }

    // Merchant Risk
    public int getMerchantRisk() {
        return merchantRisk;
    }

    public void setMerchantRisk(int merchantRisk) {
        this.merchantRisk = merchantRisk;
    }
}