import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loading } from "./components/Loading";
import { Navbar } from "./components/navbar/Navbar";
import { SuccessMessage } from "./components/SuccessMessage";
import { useTypedSelector } from "./hooks/useTypeSelector";
import { Activate } from "./pages/Activate";

import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";


function App() {
  const { loading, error, message } = useTypedSelector(state => state.auth)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activate/:token" element={<Activate />} />
      </Routes>
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
      {message && <SuccessMessage message={message} />}

    </Router>
  );
}

export default App;
