import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <h1 style={{ color: "black" }}>
        EMRE<span style={{ color: "red" }}>19</span>K
      </h1>
      <ul>
        <li>
          <button onClick={() => navigate("/")}>
            <h1>Hall of Fame</h1>
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/")}>
            <h1>Home</h1>
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/")}>
            <h1>Projects</h1>
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/about")}>
            <h1>About</h1>
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/")}>
            <h1>Contact</h1>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
