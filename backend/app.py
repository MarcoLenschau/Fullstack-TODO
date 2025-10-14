from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, {"origins": "http://localhost:4200"})
tasks = []

@app.route("/tasks", methods=["GET", "POST"])
def taskRoute():
    if request.method == 'POST':
        tasks.append(request.get_json())
        return tasks
    else:
        return tasks