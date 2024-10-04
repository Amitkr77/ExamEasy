import LandingPage from "./components/LandingPage";
import Admin from "./components/user/Admin";
import UserPage from "./components/user/UserPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
