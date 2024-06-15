import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({user}) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    // <h4>hello</h4>
    <Box
      sx={{
        background: "#eee",
        width: "25vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        sx={{ width: "156px", height: "156px" }}
      />

      <Typography
        variant="h4"
        sx={{ textTransform: "uppercase", color: "primary.light", mt: 3 }}
      >
        {user.name}
      </Typography>

      <Typography variant="subtitle1">Software Developer</Typography>

      <Typography variant="body2">{user.email}</Typography>
      <Button onClick={logout} variant="contained" sx={{mt: 2}} >Logout</Button>
    </Box>
  );
};

export default Profile;
