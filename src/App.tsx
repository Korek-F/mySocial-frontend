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
import { Post } from "./pages/Post";
import { Notifications } from "./pages/Notifications";
import { getNotifications } from "./redux/actionCreators/notiActions";

function App() {
  const dispatch = useDispatch()
  const { loading, error, message, access } = useTypedSelector(state => state.auth)

  function connectToHomeWs(access_token: string) {
    let ws = new WebSocket("ws://localhost:8000/ws/home/?token=" + access_token)
    ws.onclose = function (e) {
      console.error("chat socket closed")
    }
    console.log("test")
    ws.onmessage = function (e) {
      const data = JSON.parse(e.data);
      console.log("DADATA ", data)
    }
  }


  useEffect(() => {
    const access_token = localStorage.getItem("access")
    if (access_token) {
      const decoded_access = jwt_decode(access_token) as TokenInterface
      dispatch(getUserProfile(decoded_access.user_username) as any)
      dispatch(getNotifications() as any)
      connectToHomeWs(access_token)
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
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/activate/:token" element={<Activate />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/post/:id" element={<Post />} />
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
