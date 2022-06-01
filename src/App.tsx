import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Activate } from "./pages/Activate";

import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activate/:token" element={<Activate />} />

      </Routes>
    </Router>
  );
}

export default App;
