import React, { useState } from "react";

function App() {StateVariable.jsx
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Enter your name");
    } else {
      setError("");
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Simple Form Validation</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name:</label><br />
        
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (e.target.value !== "") {
              setError("");
            }
          }}
        />

        {/* Show error only if validation fails */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
