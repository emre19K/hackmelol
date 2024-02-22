import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>MISSION: INDEX CARD</h1>
      <p>You need to get to the highest floor and crack all keycodes.</p>
      <p>But be aware: No one was ever able to crack all keycodes!</p>
      <p>Do you want to risk your life for the index card?</p>
      <button type="submit" onClick={() => navigate("/levelone")}>
        GET IN
      </button>
    </>
  );
}

export default HomePage;
