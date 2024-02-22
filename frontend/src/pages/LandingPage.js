import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ONLY CLUBMEMBERS!</h1>
      <button onClick={() => navigate("/register")}>Join the Gang</button>
      <button onClick={() => navigate("/login")}>Hop in</button>
    </div>
  );
}

export default LandingPage;
