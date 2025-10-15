from config import db, datetime

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    dueDate = db.Column(db.DateTime, default=datetime.now()) 
    isDone = db.Column(db.Boolean, default=False) 