import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Chat from "./chat/Chat";
import { useEffect } from "react";

const App = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/app");
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<Chat />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
