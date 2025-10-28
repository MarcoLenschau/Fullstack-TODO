import os
from config import app, request
from data import Data
from swagger import swagger_bp, SWAGGER_URL, API_SPEC_PATH, API_URL, send_from_directory
from dotenv import load_dotenv

load_dotenv()
data = Data()

app.register_blueprint(swagger_bp, url_prefix=SWAGGER_URL)

@app.route(API_URL)
def swagger_spec():
    return send_from_directory(".", API_SPEC_PATH, mimetype="application/yaml")

@app.route("/tasks", methods=["GET", "POST"])
def taskRoute():
    if request.method == 'POST':
        return data.postData()
    else:
        return data.getData()

@app.route("/tasks/<id>", methods=["DELETE", "PUT"])
def deleteTask(id):
    if request.method == 'PUT':
        return data.putData(id)
    else:
        return data.deleteData(id)

if __name__ == "__main__":
    app.run(host=os.getenv("IP_ADDRESS", "127.0.0.1"), port=os.getenv("PORT", 5000), debug=False)