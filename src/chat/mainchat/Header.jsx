import {
  Avatar,
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";

import React from "react";

const Header = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: 0,
        }}
        elevation={0}
      >
        <CardHeader
          avatar={
            <><Button sx={{minWidth:"auto", mr: 1 }}>

              <ArrowBackIcon />
            </Button>
              <Avatar>R</Avatar>
            </>
          }
          action={
            <>
              <IconButton aria-label="settings">
                <VideoCallIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <CallIcon />
              </IconButton>
            </>
          }
          title="Harmeet Singh"
          subheader={
            <Typography variant="caption">Software Developer</Typography>
          }
        />
      </Card>
    </>
  );
};

export default Header;
