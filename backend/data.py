from config import db, app, request, jsonify
from task import Task

class Data():
    def __init__(self):
        with app.app_context():
            db.create_all()

    def postData(self):
        try:
            data = request.get_json()
            if not data:
                return jsonify({"status": 404})
            newTask = Task(title=data["title"], description=data.get("description"))
            db.session.add(newTask)
            db.session.commit()
            return jsonify({"message": "Task created"})
        except:
            return jsonify({"status": 404})

    def getData(self):
        try:
            tasks = []
            for task in Task.query.all():
                task = {"id": task.id, "title": task.title, "description": task.description} 
                tasks.append(task)
            return jsonify(tasks)
        except:
            return jsonify({"status": 404}) 

    def putData(self, id):
        try:
            data = request.get_json()
            if not data:
                return jsonify({"status": 404})
            task = Task.query.get(id)
            task.title = data["title"]
            task.description = data.get("description")
            db.session.commit()
            return jsonify({"message": f"Task {id} updated"})
        except:
            return jsonify({"status": 404})

    def deleteData(self, id):
        try:
            task = Task.query.get(id)
            db.session.delete(task)
            db.session.commit()
            return jsonify({"message": f"Task {id} deleted"})
        except:
            return jsonify({"status": 404})
