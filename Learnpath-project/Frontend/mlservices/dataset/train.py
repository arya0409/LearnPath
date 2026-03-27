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
X = data[["branch", "year", "goal"]]
Y = data["recommendation"]

# Split
X_train, X_test, Y_train, Y_test = train_test_split(
    X, Y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier()
model.fit(X_train, Y_train)

print("\nModel trained successfully!")

# Test prediction
sample = [[
    le_branch.transform(["CSE"])[0],
    le_year.transform([2])[0],
    le_goal.transform(["placement"])[0]
]]

prediction = model.predict(sample)

print("\nRecommended Path:", prediction[0])
