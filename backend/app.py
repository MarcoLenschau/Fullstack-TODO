from config import db, app, request, jsonify
from task import Task

with app.app_context():
    db.create_all()

def postData():
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

def getData():
    try:
        tasks = []
        for task in Task.query.all():
            task = {"id": task.id, "title": task.title, "description": task.description} 
            tasks.append(task)
        return jsonify(tasks)
    except:
        return jsonify({"status": 404}) 

def putData(id):
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

def deleteData(id):
    try:
        task = Task.query.get(id)
        db.session.delete(task)
        db.session.commit()
        return jsonify({"message": f"Task {id} deleted"})
    except:
        return jsonify({"status": 404})

@app.route("/tasks", methods=["GET", "POST"])
def taskRoute():
    if request.method == 'POST':
        return postData()
    else:
        return getData()

@app.route("/tasks/<id>", methods=["DELETE", "PUT"])
def deleteTask(id):
    if request.method == 'PUT':
        return putData(id)
    else:
        return deleteData(id)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)