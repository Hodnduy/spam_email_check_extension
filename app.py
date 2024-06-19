from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load('spam_mail_classifier.joblib')

@app.route('/classify', methods=['POST'])
def classify():
    content = request.json
    email_content = content['emailContent']
    
    prediction = model.predict([email_content])[0]

    result = 'Spam' if prediction == 1 else 'Ham'

    return jsonify(result=result)

if __name__ == '__main__':
    app.run(port=8000)
