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
import { getNotifications, unseenNotificationsCount } from "./redux/actionCreators/notiActions";
import { PopupNotification } from "./components/notification/PopupNotification";
import { ActionType } from "./redux/actionTypes/notificationTypes";
import { getNotificationText } from "./utils/getNotificationText";

function App() {
  const dispatch = useDispatch()
  const { loading, error, message, access } = useTypedSelector(state => state.auth)
  const { current_notification, unseen_notifications_count } = useTypedSelector(state => state.noti)

  function connectToHomeWs(access_token: string) {
    let ws = new WebSocket("ws://127.0.0.1:80/ws/home/?token=" + access_token)
    ws.onclose = function (e) {
      console.error(e)
    }
    ws.onmessage = function (e) {
      const data = JSON.parse(e.data);

      const from_user = data.payload.data.from
      const noti_type = data.payload.data.notification_type
      dispatch(getNotifications() as any)

      dispatch({
        type: ActionType.SET_CURRENT_NOTIFICATION,
        payload: getNotificationText(from_user, noti_type)
      })
      dispatch({ type: ActionType.UNSEEN_NOTIFICATIONS_COUNT_INCREMENT })
    }
  }


  useEffect(() => {
    const access_token = localStorage.getItem("access")
    if (access_token) {
      const decoded_access = jwt_decode(access_token) as TokenInterface
      dispatch(getUserProfile(decoded_access.user_username) as any)
      dispatch(getNotifications() as any)
      dispatch(unseenNotificationsCount() as any)
      connectToHomeWs(access_token)
    }

  }, [access, dispatch])

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
        {current_notification && <PopupNotification notification={current_notification} />}

      </Router >
    </div >
  );
}

export default App;
