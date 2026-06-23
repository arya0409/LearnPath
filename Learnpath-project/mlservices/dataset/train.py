import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

print("Starting ML Training...")

# Load dataset
data = pd.read_csv("training_data.csv")

print("\nDataset Loaded:")
print(data.head())

# Encode categorical columns
le_branch = LabelEncoder()
le_year = LabelEncoder()
le_goal = LabelEncoder()

data["branch"] = le_branch.fit_transform(data["branch"])
data["year"] = le_year.fit_transform(data["year"])
data["goal"] = le_goal.fit_transform(data["goal"])

print("\nEncoded Data:")
print(data.head())

# Prepare input and output
X = data[
    [
        "branch", "year", "cgpa", "coding", "aptitude",
        "internships", "goal",
        "interest_ai", "interest_web", "interest_core"
    ]
]
Y = data["recommendation"]

# Split
X_train, X_test, Y_train, Y_test = train_test_split(
    X, Y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier()
model.fit(X_train, Y_train)

print("\nModel trained successfully!")
import joblib

joblib.dump(model, "career_model.pkl")
joblib.dump(le_branch, "le_branch.pkl")
joblib.dump(le_year, "le_year.pkl")
joblib.dump(le_goal, "le_goal.pkl")

print("Model saved successfully!")

# Test prediction
sample = [[
    le_branch.transform(["CSE"])[0],
    le_year.transform([2])[0],
    8.5,
    7,
    6,
    1,
    le_goal.transform(["placement"])[0],
    1,
    0,
    0
]]

prediction = model.predict(sample)

print("\nRecommended Path:", prediction[0])
