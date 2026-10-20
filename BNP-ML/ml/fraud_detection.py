import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# ==========================================
# 1. LOAD DATASET
# ==========================================

df = pd.read_csv("data/transactions.csv")

print("Dataset Shape:")
print(df.shape)

print("\nColumns:")
print(df.columns.tolist())

print("\nFirst 5 rows:")
print(df.head())

print("\nMissing Values:")
print(df.isnull().sum())

print("\nFraud Distribution:")
print(df["is_fraud"].value_counts())

print("\nFraud Percentage:")
print(df["is_fraud"].value_counts(normalize=True) * 100)


# ==========================================
# 2. SELECT FEATURES
# ==========================================

X = df[
    [
        "amount",
        "transaction_hour",
        "transaction_frequency",
        "failed_attempts",
        "international",
        "account_age_days",
        "device_changed",
        "previous_fraud",
        "merchant_risk"
    ]
]

# Target variable
y = df["is_fraud"]


# ==========================================
# 3. SPLIT DATASET
# ==========================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print("\nTraining data:", X_train.shape)
print("Testing data:", X_test.shape)

print("\nTraining target distribution:")
print(y_train.value_counts())

print("\nTesting target distribution:")
print(y_test.value_counts())


# ==========================================
# 4. CREATE RANDOM FOREST MODEL
# ==========================================

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)


# ==========================================
# 5. TRAIN MODEL
# ==========================================

model.fit(X_train, y_train)

print("\nRandom Forest model trained successfully!")


# ==========================================
# 6. MAKE PREDICTIONS
# ==========================================

y_pred = model.predict(X_test)


# ==========================================
# 7. COMPARE ACTUAL VS PREDICTED
# ==========================================

print("\nActual values:")
print(y_test.head(20).values)

print("\nPredicted values:")
print(y_pred[:20])

# ==========================================
# 8. EVALUATE MODEL
# ==========================================

from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

print("\nAccuracy:")
print(accuracy_score(y_test, y_pred))

print("\nClassification Report:")
print(classification_report(
    y_test,
    y_pred,
    target_names=["Legitimate", "Fraud"]
))

print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# ==========================================
# 9. FRAUD PROBABILITY / RISK SCORE
# ==========================================

fraud_probability = model.predict_proba(X_test)[:, 1]

print("\nFraud probabilities:")
print(fraud_probability[:20])

print("\nFraud risk percentages:")
print((fraud_probability[:20] * 100).round(2))

# ==========================================
# 10. RISK LEVEL
# ==========================================

def get_risk_level(probability):

    if probability >= 0.75:
        return "HIGH"
    elif probability >= 0.40:
        return "MEDIUM"
    else:
        return "LOW"


print("\nRisk levels:")

for probability in fraud_probability[:20]:

    risk = get_risk_level(probability)

    print(
        f"Fraud Probability: {probability * 100:.2f}% "
        f"-> Risk Level: {risk}"
    )

# ==========================================
# 11. FEATURE IMPORTANCE
# ==========================================

feature_importance = pd.DataFrame({
    "Feature": X.columns,
    "Importance": model.feature_importances_
})

feature_importance = feature_importance.sort_values(
    by="Importance",
    ascending=False
)

print("\nFeature Importance:")
print(feature_importance)    

# ==========================================
# 12. SAVE TRAINED MODEL
# ==========================================

joblib.dump(model, "ml/fraud_model.pkl")

print("\nModel saved successfully!")