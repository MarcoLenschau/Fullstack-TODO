from config import app, request
from data import Data
from flask import send_from_directory
from flask_swagger_ui import get_swaggerui_blueprint

data = Data()

SWAGGER_URL = "/api"
API_SPEC_PATH = "openapi.yaml"
API_URL = f"/{API_SPEC_PATH}"

swagger_bp = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={"app_name": "Fullstack TODO API"}
)
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
    app.run(host="0.0.0.0", port=5000, debug=False)