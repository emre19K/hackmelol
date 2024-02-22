import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Navbar";
import About from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";

function NavigationConditional() {
  const location = useLocation();
  const forbiddenRoutes = ["/", "/register", "/login"];

  return !forbiddenRoutes.includes(location.pathname) ? <Navbar /> : null;
}

function App() {
  return (
    <Router>
      <>
        <NavigationConditional />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/login" element={<LoginForm />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
