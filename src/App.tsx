import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loading } from "./components/Loading";
import { Navbar } from "./components/navbar/Navbar";
import { SuccessMessage } from "./components/SuccessMessage";
import { useTypedSelector } from "./hooks/useTypeSelector";
import { Activate } from "./pages/Activate";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";


function App() {
  const { loading, error, message } = useTypedSelector(state => state.auth)
  const { post_loading } = useTypedSelector(state => state.posts)
  return (
    <div className="main_content">
      <Router>
        <Navbar />
        <div className="center_content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/activate/:token" element={<Activate />} />
            <Route path="/profile/:username" element={<Profile />} />
          </Routes>
        </div>
        {loading || post_loading && <Loading />}
        {error && <ErrorMessage error={error} />}
        {message && <SuccessMessage message={message} />}

      </Router >
    </div >
  );
}

export default App;
