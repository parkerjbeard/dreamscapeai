import React, { useState } from "react";
import "./DreamInput.css";
import axios from "axios";

const DreamInput = () => {
  const [dreamDescription, setDreamDescription] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:5000/api/analyze-dream", {
      dream_description: dreamDescription,
    });
    const interpretation = response.data.interpretation;
    // Display interpretation to the user or handle it as desired
  } catch (error) {
    // Handle errors
  }
};


  return (
    <div className="dream-input-container">
      <h1>Describe Your Dream</h1>
      <form className="dream-input-form" onSubmit={handleSubmit}>
        <label htmlFor="dreamDescription">Dream Description:</label>
        <textarea
          id="dreamDescription"
          rows="5"
          value={dreamDescription}
          onChange={(e) => setDreamDescription(e.target.value)}
          required
        />
        <button type="submit">Analyze Dream</button>
      </form>
    </div>
  );
};

export default DreamInput;
