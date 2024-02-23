import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Two() {

    const navigate = useNavigate();
    const [input, setInput] = useState("");
  
    function handleSubmit() {
      // ON SUCCESS OPENDOOR
      if (input.toLocaleLowerCase() === "open") navigate("/lvl3");
    }

  return (
    <>
      <h1>SECOND FLOOR: Mr. Abruzzis´s Office</h1>
      <p>The vault... where is it?! Ah i found it!</p>
      <p>Guess what? Another keycode!</p>
      <p>*looks around to find hints*</p>
      <p>What does that mean?</p>
      <p>PQFO -1</p>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="password"
      />
      <button type="submit" onClick={handleSubmit}>
        PASS
      </button>
    </>
  );
}

export default Two;
