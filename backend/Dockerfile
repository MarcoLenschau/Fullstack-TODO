FROM python:3.12

EXPOSE 5000

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

CMD ["python", "app.py"]