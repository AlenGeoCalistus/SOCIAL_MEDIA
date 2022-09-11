import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Signup from "./pages/Auth/signup/Signup";
import Login from "./pages/Auth/login/Login";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="signup" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../signup" />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="../home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../home" /> : <Login />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
