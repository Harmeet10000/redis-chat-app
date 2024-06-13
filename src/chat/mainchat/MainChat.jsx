import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import ChatArea from "./ChatArea";
import Footer from "./Footer";

const MainChat = () => {
  return (
    <Box
      sx={{
        width: "50vw",
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Header />
      <ChatArea />
      <Footer />
    </Box>
  );
};

export default MainChat;
