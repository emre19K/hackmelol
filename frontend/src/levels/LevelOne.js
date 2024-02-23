import { useState } from "react";
import { useNavigate } from "react-router-dom";

function One() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  function handleSubmit() {
    // ON SUCCESS OPENDOOR
    if (input === "1256") navigate("/twoo");
  }

  return (
    <>
      <h1>FIRST FLOOR: SECURIY DOOR KEYLOCK</h1>
      <p>Damn! I need to crack the keycode...</p>
      <p>Hmmm...</p>
      <p>Mike told me I should inspect something. But what?!</p>
      <label>Enter Code:</label>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="password"
        id="1256"
      />
      <button type="submit" onClick={handleSubmit}>
        PASS
      </button>
    </>
  );
}

export default One;
