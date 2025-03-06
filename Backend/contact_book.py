from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory contacts list
contacts = [
    {"id": 1, "name": "John Doe", "phone": "123-456-7890"},
    {"id": 2, "name": "Jane Doe", "phone": "987-654-3210"}
]

@app.route('/')
def home():
    return "Welcome to the Contact Book API!"

@app.route('/contacts', methods=['GET'])
def get_contacts():
    return jsonify(contacts)

@app.route('/contacts', methods=['POST'])
def add_contact():
    data = request.json
    new_contact = {
        "id": len(contacts) + 1,
        "name": data["name"],
        "phone": data["phone"]
    }
    contacts.append(new_contact)
    return jsonify({"message": "Contact added!", "contact": new_contact})

@app.route('/contacts/<int:contact_id>', methods=['DELETE'])
def delete_contact(contact_id):
    global contacts
    contacts = [c for c in contacts if c["id"] != contact_id]
    return jsonify({"message": "Contact deleted!"})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)

