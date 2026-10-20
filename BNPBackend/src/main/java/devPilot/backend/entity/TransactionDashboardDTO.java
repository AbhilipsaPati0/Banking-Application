package devPilot.backend.entity;

public class TransactionDashboardDTO {

    private Double totalAmount;
    private Long transactionCount;
    private Double averageAmount;
    private Long failedCount;

    public TransactionDashboardDTO() {
    }

    public TransactionDashboardDTO(Double totalAmount, Long transactionCount,
                                   Double averageAmount, Long failedCount) {
        this.totalAmount = totalAmount;
        this.transactionCount = transactionCount;
        this.averageAmount = averageAmount;
        this.failedCount = failedCount;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Long getTransactionCount() {
        return transactionCount;
    }

    public void setTransactionCount(Long transactionCount) {
        this.transactionCount = transactionCount;
    }

    public Double getAverageAmount() {
        return averageAmount;
    }

    public void setAverageAmount(Double averageAmount) {
        this.averageAmount = averageAmount;
    }

    public Long getFailedCount() {
        return failedCount;
    }

    public void setFailedCount(Long failedCount) {
        this.failedCount = failedCount;
    }
}