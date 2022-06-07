import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
import { getUserProfile } from "./redux/actionCreators/userActions";
import jwt_decode from 'jwt-decode'
import { TokenInterface } from "./redux/actionTypes/authTypes";

function App() {
  const dispatch = useDispatch()
  const { loading, error, message, access } = useTypedSelector(state => state.auth)

  useEffect(() => {
    const access_token = localStorage.getItem("access")
    if (access_token) {
      const decoded_access = jwt_decode(access_token) as TokenInterface
      dispatch(getUserProfile(decoded_access.user_username) as any)
    }
  }, [access])

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
        {loading && <Loading />}
        {error && <ErrorMessage error={error} />}
        {message && <SuccessMessage message={message} />}

      </Router >
    </div >
  );
}

export default App;
