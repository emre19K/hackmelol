import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const fakeUserData = {
    name: "admin",
    password: "123"
  }

  function handleLogin() {
    if(name === fakeUserData.name && password === fakeUserData.password) {
      navigate("/home")
      return
    }
    alert("Wrong data!")
  }

  return (
    <div>
      <h1>SHOW CLUB CARD</h1>
      <label>Name</label>
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <label>Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" />
      <button onClick={handleLogin}>Show club card</button>
      <p>
        Wanna join the gang?{" "}
        <button onClick={() => navigate("/register")}>Join gang</button>
      </p>
    </div>
  );
}

export default LoginForm;
