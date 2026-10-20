package devPilot.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import devPilot.backend.dto.FraudPredictionRequest;
import devPilot.backend.dto.FraudPredictionResponse;

@Service
public class FraudDetectionService {

    private final RestClient restClient;

    public FraudDetectionService() {
        this.restClient = RestClient.create("http://localhost:8000");
    }

    public FraudPredictionResponse predictFraud(FraudPredictionRequest request) {

        return restClient.post()
                .uri("/predict")
                .body(request)
                .retrieve()
                .body(FraudPredictionResponse.class);
    }
}