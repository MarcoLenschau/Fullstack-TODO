from flask import send_from_directory
from flask_swagger_ui import get_swaggerui_blueprint

SWAGGER_URL = "/api"
API_SPEC_PATH = "docs/openapi.yaml"
API_URL = f"/{API_SPEC_PATH}"

swagger_bp = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={"app_name": "Fullstack TODO API"}
)