import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import Sidebar from "./sidebar";
import MainChat from "./mainchat/MainChat";
import Profile from "./profile/Profile";
import socket from "./socket";

const Chat = () => {
  useEffect(() => {
    console.log(socket.id);
  }, [socket]);
  return (
    <Paper square elevation={0} sx={{ height: "100vh", display: "flex" }}>
      <Sidebar />
      <MainChat />
      <Profile />
    </Paper>
  );
};

export default Chat;
