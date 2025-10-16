# Fullstack TODO App

A simple fullstack TODO application built with Angular (frontend) and Flask (backend). This project demonstrates CRUD operations, RESTful API communication, and containerization with Docker.

## Features
- Add, view, and delete tasks
- Responsive Angular frontend
- RESTful Flask backend with SQLite database
- CORS enabled for frontend-backend communication
- Docker support for easy deployment

## Project Structure
```
Fullstack-TODO/
├── backend/        # Flask backend
│   ├── app.py
│   ├── config.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── ...
├── frontend/       # Angular frontend
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites
- Node.js & npm
- Python 3
- Docker (optional)

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. (Optional) Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```
   The app will be available at `http://localhost:4200`.

### Docker Setup
1. Build and run both frontend and backend using Docker Compose:
   ```bash
   docker-compose up --build
   ```

## API Endpoints
- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Add a new task
- `DELETE /tasks/<id>` - Delete a task