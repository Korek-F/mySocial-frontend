import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <Home />
          }
        />
        <Route
          path={ROUTES.SIGNIN}
          element={
            <Signin />
          }
        />
        <Route
          path={ROUTES.SIGNUP}
          element={
            <Signup />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
