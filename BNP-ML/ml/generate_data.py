import pandas as pd
import numpy as np

# Make results reproducible
np.random.seed(42)

# Number of transactions
n = 10000

# Generate transaction data
data = {
    "transaction_id": [f"TXN{i:05d}" for i in range(1, n + 1)],

    "amount": np.random.randint(100, 100000, n),

    "transaction_hour": np.random.randint(0, 24, n),

    "transaction_frequency": np.random.randint(1, 15, n),

    "failed_attempts": np.random.randint(0, 5, n),

    "international": np.random.randint(0, 2, n),

    "account_age_days": np.random.randint(30, 3000, n),

    "device_changed": np.random.randint(0, 2, n),

    "previous_fraud": np.random.randint(0, 2, n),

    "merchant_risk": np.random.randint(1, 11, n)
}

df = pd.DataFrame(data)


# -----------------------------------------
# Create a synthetic fraud pattern
# -----------------------------------------

fraud_score = (
    (df["amount"] > 70000).astype(int) * 2
    + (df["transaction_hour"].isin([0, 1, 2, 3, 4])).astype(int) * 2
    + (df["transaction_frequency"] > 10).astype(int) * 2
    + (df["failed_attempts"] >= 3).astype(int) * 2
    + (df["international"] == 1).astype(int)
    + (df["device_changed"] == 1).astype(int)
    + (df["previous_fraud"] == 1).astype(int) * 3
    + (df["merchant_risk"] >= 8).astype(int) * 2
)

# Convert score into fraud label
df["is_fraud"] = (fraud_score >= 6).astype(int)


# Save dataset
df.to_csv("data/transactions.csv", index=False)

print("Dataset created successfully!")
print(f"Total transactions: {len(df)}")
print("\nFraud distribution:")
print(df["is_fraud"].value_counts())

print("\nFirst 5 rows:")
print(df.head())