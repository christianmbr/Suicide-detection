from flask import Flask, request
from flask_cors import CORS
import controller

app = Flask(__name__)
CORS(app)

@app.route('/prediction', methods=['POST'])
def predict():
  body = request.get_json()
  res = controller.validationController(body)
  return { 'status': 'OK', 'result': res }

app.run(debug = True)