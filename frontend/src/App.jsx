import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LikesPage from "./pages/LikesPage";
import Sidebar from "./components/Sidebar";
import { Navigate, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";

function App() {

  const { authUser, loading } = useAuthContext();
  if(loading) return null;

  return (
    <div>
      <Sidebar />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/likes"
            element={authUser ? <LikesPage /> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
