from config import db, app, request, jsonify
from task import Task

with app.app_context():
    db.create_all()

def postData():
    data = request.get_json()
    if not data:
        return jsonify({"status": 404})
    newTask = Task(title=data["title"], description=data.get("description"))
    db.session.add(newTask)
    db.session.commit()
    return jsonify({"message": "Task created"})

def getData():
    tasks = []
    for task in Task.query.all():
        task = {"id": task.id, "title": task.title} 
        tasks.append(task)
    return jsonify(tasks)

@app.route("/tasks", methods=["GET", "POST"])
def taskRoute():
    if request.method == 'POST':
        return postData()
    else:
        return getData()

@app.route("/tasks/<id>", methods=["DELETE"])
def deleteTask(id):
    try:
        task = Task.query.get(id)
        db.session.delete(task)
        db.session.commit()
        return jsonify({"message": f"Task {id} deleted"})
    except Exception as e:
        return jsonify({"status": 404})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)