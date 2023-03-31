from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = ""

@app.route("/api/analyze-dream", methods=["POST"])
def analyze_dream():
    data = request.get_json()

    if not data or "dream_description" not in data:
        return jsonify({"error": "Invalid request"}), 400

    dream_description = data["dream_description"]

    try:
        response = openai.Completion.create(
            engine="text-davinci-002",  # Replace with the appropriate GPT-4 engine when available
            prompt=f"Analyze and interpret the following dream description: {dream_description}",
            max_tokens=150,
            n=1,
            stop=None,
            temperature=0.7,
        )
        interpretation = response.choices[0].text.strip()
        return jsonify({"interpretation": interpretation})

    except Exception as e:
        print(e)
        return jsonify({"error": "Failed to interpret dream"}), 500


if __name__ == "__main__":
    app.run(debug=True)
