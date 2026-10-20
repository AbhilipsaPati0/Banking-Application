from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
import shap

# ==========================================
# 1. CREATE FASTAPI APP
# ==========================================

app = FastAPI(
    title="BNP Fraud Detection ML API",
    description="Machine Learning API for transaction fraud detection",
    version="1.0"
)


# ==========================================
# 2. LOAD TRAINED ML MODEL
# ==========================================

model = joblib.load("ml/fraud_model.pkl")
explainer = shap.TreeExplainer(model)

print("Fraud detection model loaded successfully!")


# ==========================================
# 3. TRANSACTION INPUT MODEL
# ==========================================

class Transaction(BaseModel):

    amount: float
    transaction_hour: int
    transaction_frequency: int
    failed_attempts: int
    international: int
    account_age_days: int
    device_changed: int
    previous_fraud: int
    merchant_risk: int


# ==========================================
# 4. HOME ENDPOINT
# ==========================================

@app.get("/")
def home():

    return {
        "message": "BNP Fraud Detection ML API is running"
    }


# ==========================================
# 5. GENERATE RISK REASONS
# ==========================================
def get_shap_reasons(data):

    shap_values = explainer.shap_values(data)

    # Handle SHAP output for different versions
    if isinstance(shap_values, list):
        values = shap_values[1][0]

    elif len(shap_values.shape) == 3:
        values = shap_values[0, :, 1]

    else:
        values = shap_values[0]

    feature_names = data.columns

    contributions = list(zip(feature_names, values))

    # Sort by strongest positive fraud contribution
    contributions.sort(key=lambda x: x[1], reverse=True)

    reasons = []

    feature_messages = {
        "amount": "High transaction amount",
        "transaction_hour": "Unusual transaction hour",
        "transaction_frequency": "High transaction frequency",
        "failed_attempts": "Multiple failed attempts",
        "international": "International transaction",
        "account_age_days": "Account age contributed to the risk",
        "device_changed": "Device change detected",
        "previous_fraud": "Previous fraud history detected",
        "merchant_risk": "High-risk merchant"
    }

    for feature, contribution in contributions:

        if contribution > 0:

            reasons.append(feature_messages[feature])

        if len(reasons) == 5:
            break

    return reasons


# ==========================================
# 6. FRAUD PREDICTION ENDPOINT
# ==========================================

@app.post("/predict")
def predict_fraud(transaction: Transaction):

    # Convert incoming transaction into DataFrame

    data = pd.DataFrame([transaction.model_dump()])


    # Get fraud probability

    fraud_probability = model.predict_proba(data)[0][1]


    # Convert probability into percentage

    fraud_percentage = fraud_probability * 100


    # Determine risk level

    if fraud_probability >= 0.75:

        risk_level = "HIGH"

    elif fraud_probability >= 0.40:

        risk_level = "MEDIUM"

    else:

        risk_level = "LOW"


    # Get final prediction

    prediction = model.predict(data)[0]


    if prediction == 1:

        prediction_result = "FRAUD"

    else:

        prediction_result = "LEGITIMATE"


    # Generate explanation

    risk_reasons = get_shap_reasons(data)


    # Return result

    return {
        "prediction": prediction_result,
        "fraud_probability": round(fraud_probability, 4),
        "fraud_percentage": round(fraud_percentage, 2),
        "risk_level": risk_level,
        "risk_reasons": risk_reasons
    }