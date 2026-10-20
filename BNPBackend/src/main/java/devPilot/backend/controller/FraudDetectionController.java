package devPilot.backend.controller;

import org.springframework.web.bind.annotation.*;

import devPilot.backend.dto.FraudPredictionRequest;
import devPilot.backend.dto.FraudPredictionResponse;
import devPilot.backend.entity.Transaction;
import devPilot.backend.repository.TransactionRepository;
import devPilot.backend.service.FraudDetectionService;

@RestController
@RequestMapping("/api/fraud")
public class FraudDetectionController {

    private final FraudDetectionService fraudDetectionService;
    private final TransactionRepository transactionRepository;

    public FraudDetectionController(
            FraudDetectionService fraudDetectionService,
            TransactionRepository transactionRepository) {

        this.fraudDetectionService = fraudDetectionService;
        this.transactionRepository = transactionRepository;
    }

    // Existing manual prediction endpoint
    @PostMapping("/predict")
    public FraudPredictionResponse predictFraud(
            @RequestBody FraudPredictionRequest request) {

        return fraudDetectionService.predictFraud(request);
    }

    // Analyze an existing transaction from MySQL
    @GetMapping("/analyze/{id}")
    public FraudPredictionResponse analyzeTransaction(
            @PathVariable Long id) {

        Transaction transaction =
                transactionRepository.findById(id).orElse(null);

        if (transaction == null) {
            throw new RuntimeException("Transaction not found");
        }

        FraudPredictionRequest request = new FraudPredictionRequest();

        request.setAmount(transaction.getAmount());
        request.setTransaction_hour(transaction.getTransactionHour());
        request.setTransaction_frequency(
                transaction.getTransactionFrequency()
        );
        request.setFailed_attempts(
                transaction.getFailedAttempts()
        );
        request.setInternational(
                transaction.getInternational()
        );
        request.setAccount_age_days(
                transaction.getAccountAgeDays()
        );
        request.setDevice_changed(
                transaction.getDeviceChanged()
        );
        request.setPrevious_fraud(
                transaction.getPreviousFraud()
        );
        request.setMerchant_risk(
                transaction.getMerchantRisk()
        );

        return fraudDetectionService.predictFraud(request);
    }
}