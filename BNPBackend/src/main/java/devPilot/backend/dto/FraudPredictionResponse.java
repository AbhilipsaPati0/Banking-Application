package devPilot.backend.dto;

import java.util.List;

public class FraudPredictionResponse {

    private String prediction;
    private double fraud_probability;
    private double fraud_percentage;
    private String risk_level;
    private List<String> risk_reasons;

    public String getPrediction() {
        return prediction;
    }

    public void setPrediction(String prediction) {
        this.prediction = prediction;
    }

    public double getFraud_probability() {
        return fraud_probability;
    }

    public void setFraud_probability(double fraud_probability) {
        this.fraud_probability = fraud_probability;
    }

    public double getFraud_percentage() {
        return fraud_percentage;
    }

    public void setFraud_percentage(double fraud_percentage) {
        this.fraud_percentage = fraud_percentage;
    }

    public String getRisk_level() {
        return risk_level;
    }

    public void setRisk_level(String risk_level) {
        this.risk_level = risk_level;
    }

    public List<String> getRisk_reasons() {
        return risk_reasons;
    }

    public void setRisk_reasons(List<String> risk_reasons) {
        this.risk_reasons = risk_reasons;
    }
}