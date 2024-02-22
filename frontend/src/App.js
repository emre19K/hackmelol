import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Navbar";
import About from "./pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route excact path="/" element={<About/>} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
