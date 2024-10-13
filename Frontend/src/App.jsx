import LandingPage from "./components/LandingPage";
import Admin from "./components/user/Admin";
import UserPage from "./components/user/UserPage";
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/About" element={<About />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
