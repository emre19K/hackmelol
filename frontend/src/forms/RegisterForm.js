import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  function handleRegister() {
    console.log("REGISTER STARTED");
  }

  return (
    <div>
      <h1>COME IN BRO/SIS!</h1>
      <label>Name</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <button onClick={handleRegister}>Get club card</button>
      <p>
        Already club member?{" "}
        <button onClick={() => navigate("/login")}>Hop in</button>
      </p>
    </div>
  );
}

export default RegisterForm;
