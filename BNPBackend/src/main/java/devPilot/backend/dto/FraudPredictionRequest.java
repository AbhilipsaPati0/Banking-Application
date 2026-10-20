package devPilot.backend.dto;

public class FraudPredictionRequest {

    private double amount;
    private int transaction_hour;
    private int transaction_frequency;
    private int failed_attempts;
    private int international;
    private int account_age_days;
    private int device_changed;
    private int previous_fraud;
    private int merchant_risk;

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public int getTransaction_hour() {
        return transaction_hour;
    }

    public void setTransaction_hour(int transaction_hour) {
        this.transaction_hour = transaction_hour;
    }

    public int getTransaction_frequency() {
        return transaction_frequency;
    }

    public void setTransaction_frequency(int transaction_frequency) {
        this.transaction_frequency = transaction_frequency;
    }

    public int getFailed_attempts() {
        return failed_attempts;
    }

    public void setFailed_attempts(int failed_attempts) {
        this.failed_attempts = failed_attempts;
    }

    public int getInternational() {
        return international;
    }

    public void setInternational(int international) {
        this.international = international;
    }

    public int getAccount_age_days() {
        return account_age_days;
    }

    public void setAccount_age_days(int account_age_days) {
        this.account_age_days = account_age_days;
    }

    public int getDevice_changed() {
        return device_changed;
    }

    public void setDevice_changed(int device_changed) {
        this.device_changed = device_changed;
    }

    public int getPrevious_fraud() {
        return previous_fraud;
    }

    public void setPrevious_fraud(int previous_fraud) {
        this.previous_fraud = previous_fraud;
    }

    public int getMerchant_risk() {
        return merchant_risk;
    }

    public void setMerchant_risk(int merchant_risk) {
        this.merchant_risk = merchant_risk;
    }
}