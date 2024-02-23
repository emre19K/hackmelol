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
import Surprise from "./pages/SurprisePage";
import HomePage from "./pages/HomePage";

import One from "./levels/LevelOne";
import Two from "./levels/LevelTwo";
import Three from "./levels/LevelThree";

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
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/youarecool" element={<Surprise />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/levelone" element={<One />} />
          <Route exact path="/twoo" element={<Two />} />
          <Route exact path="/lvl3" element={<Three />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
