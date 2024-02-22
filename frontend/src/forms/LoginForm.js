import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  function handleLogin() {
    console.log("LOGIN STARTED");
  }

  return (
    <div>
      <h1>SHOW CLUB CARD</h1>
      <label>Name</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <button onClick={handleLogin}>Show club card</button>
      <p>
        Wanna join the gang?{" "}
        <button onClick={() => navigate("/register")}>Join gang</button>
      </p>
    </div>
  );
}

export default LoginForm;
