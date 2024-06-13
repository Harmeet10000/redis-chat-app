import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
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
        Harmeet Singh
      </Typography>

      <Typography variant="subtitle1">Software Developer</Typography>

      <Typography variant="body2">kartik@gmail.com</Typography>
    </Box>
  );
};

export default Profile;
