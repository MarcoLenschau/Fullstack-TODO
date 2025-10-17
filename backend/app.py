from config import app, request
from data import Data

data = Data()

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