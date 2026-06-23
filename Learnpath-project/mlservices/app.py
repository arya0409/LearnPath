from flask import Flask, request, jsonify
from flask_cors import CORS   
from roadmaps import roadmap_data

print("App file is running...")

app = Flask(__name__)
CORS(app)   #  ADD THIS (VERY IMPORTANT)

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.json

    branch = data["branch"]
    goal = data["goal"]
    exam = data.get("target_exam", "")

    # RULE ENGINE
  # SMART PATH MAPPING
    path_map = {
    "CSE": {
        "placement": "dsa_web_dev",
        "masters": "gate_cse",
        "govt": "govt_tech_path",
        "startup": "startup_path_cse"
    },
    "IT": {
        "placement": "dsa_web_dev",
        "masters": "gate_cse",
        "govt": "govt_tech_path",
        "startup": "startup_path_cse"
    },
    "Mechanical": {
        "placement": "core_mech_placement",
        "masters": "gate_mech",
        "govt": "govt_mech_path",
        "startup": "startup_path_mech"
    },
    "Civil": {
        "placement": "core_civil_placement",
        "masters": "gate_civil",
        "govt": "govt_civil_path",
        "startup": "startup_path_civil"
    },
    "ENTC": {
        "placement": "core_entc_placement",
        "masters": "gate_entc",
        "govt": "govt_tech_path",
        "startup": "startup_path_entc"
    },
     "Electrical": {
        "placement": "core_electrical_placement",
        "masters": "gate_eee",
        "govt": "govt_eee_path",
        "startup": "startup_path_eee"
    }
}
    # path = path_map.get(branch, {}).get(goal, "dsa_web_dev")
    # FETCH ROADMAP
    if goal == "masters" and exam == "CAT":
        path = "cat_mba_path"
    else:
        path = path_map.get(branch, {}).get(goal, "dsa_web_dev")

    result = roadmap_data[path]

        # return jsonify({
        #     "path": path,
        #     "title": result["title"],
        #     "description": result["description"],
        #     "steps": result["steps"]
        # })
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)