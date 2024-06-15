import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import Sidebar from "./sidebar";
import MainChat from "./mainchat/MainChat";
import Profile from "./profile/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";

const PATH = "http://localhost:3000";

const Chat = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef();

  useEffect(() => {
    if (!state) navigate("/");
    const socket = io.connect(PATH);
    socketRef.current = socket;
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
  }, []); 

  useEffect(() => {
  if(!isConnected) {
    socketRef.current.emit("ADD_USER", state);
    socketRef.current.on("ONLINE_USERS", (users) => {
      console.log(users);
    });
  }
  }, [isConnected, state]);


if (!state) return null;
  return (
    <Paper square elevation={0} sx={{ height: "100vh", display: "flex" }}>
      <Sidebar user={state} />
      <MainChat />
      <Profile user={state} />
    </Paper>
  );
};

export default Chat;
