from flask_cors import CORS
from flask.json import jsonify, loads
from flask import Flask, request
from utils.functions import decode_base64_img
from datetime import datetime


app  = Flask(__name__)
cors = CORS(app)


@app.route('/process', methods=['POST'])
def test():
    data = loads(request.data).get('img')
    timestamp = datetime.now()
    timestamp = timestamp.strftime("%d%m%Y%H%M%S")

    FILEPATH = f'../imgs/{timestamp}.jpg'

    decode_base64_img(data, FILEPATH)

    return jsonify({'status': 'ok!'})


if __name__ == "__main__":
    app.run(debug=True)