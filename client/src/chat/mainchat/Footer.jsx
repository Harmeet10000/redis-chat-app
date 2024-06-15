import { Box, Button, TextField } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
const Footer = () => {
  return (
    <>
      <Box sx={{ p: 1, display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button sx={{ minwidth: "auto", mr: 1 }}>
            <MoreVertIcon />
          </Button>

          <Button sx={{ minwidth: "auto", nr: 1 }}>
            <InsertEmoticonIcon />
          </Button>
        </Box>

        <Box sx={{ display: "flex", flex: 1 }}>
          <TextField
            placeholder="Type your asg and hit"
            size="small"
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                borderRadius: 0,
                borderRight: 0,
              },
            }}
          />

          <Button
            variant="outlined"
            sx={{ borderRadius: 0, winwidth: "auto", height: "100%" }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
