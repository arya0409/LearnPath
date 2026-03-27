import pandas as pd
import random
branches = ["CSE", "IT", "Civil", "Mech", "ENTC"]
goals = ["placement", "masters", "civil", "startup"]
data = []
for i in range(1000):

    branch = random.choice(branches)
    year = random.randint(1, 4)
    cgpa = round(random.uniform(6, 9.8), 2)

    coding = random.randint(1, 10)
    aptitude = random.randint(1, 10)

    internships = random.choice([0, 1])

    interest_ai = random.choice([0, 1])
    interest_web = random.choice([0, 1])
    interest_core = random.choice([0, 1])

    goal = random.choice(goals)

    # Recommendation rules (label)
    if goal == "placement" and coding >= 6:
        rec = "dsa_web"

    elif goal == "masters" and cgpa >= 8.5:
        rec = "gate"

    elif goal == "civil":
        rec = "upsc"

    elif goal == "startup":
        rec = "startup"

    else:
        rec = "general_skill"

    data.append([
        branch, year, cgpa, coding, aptitude,
        internships, goal,
        interest_ai, interest_web, interest_core,
        rec
    ])

columns = [
    "branch", "year", "cgpa", "coding",
    "aptitude", "internships", "goal",
    "interest_ai", "interest_web", "interest_core",
    "recommendation"
]

df = pd.DataFrame(data, columns=columns)

df.to_csv("training_data.csv", index=False)

print(" Dataset created: training_data.csv")
