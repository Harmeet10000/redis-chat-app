import React from "react";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ChatArea = () => {
  return (
    <Box
      sx={{
        flex: "1 0 0",
        background: "#eee",
        overflowY: "auto",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          py: 2,
          position: "sticky",
          top: 0,
          background: "#fff",
        }}
      >
        <Chip label=" Today" />
      </Stack>
      <List
        sx={{
          p: 0,
          overflowY: "auto",
          flex: "1 0 0",
        }}
      >
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", width: "80%" }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper
              sx={{
                width: "100%",
                p: 1.5,
                bgcolor: "#ccc",
               }}
            >
              <ListItemText
                sx={{ m: 0 }}
                primary="Saurbh Kumar"
                secondary={
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit quos modi, et sint soluta delectus itaque ducimus. Eos,
                    quaerat, doloremque at quia reprehenderit quae, quis veniam
                    corrupti illum minus perferendis!
                  </Typography>
                }
              />
              <Box
                mt={1}
                sx={{ display: "flex",
                alignItems: "center", 
                justifyContent: "space-between" }}
              >
                <Typography variant="caption">10:00 AM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>

        <ListItem sx={{ flexDirection: "row-reverse", mb: 2 }}>
          <Box
            sx={{ display: "flex", width: "80%", flexDirection: "row-reverse" }}
          >
            <ListItemAvatar
              sx={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Saurbh Kumar"
                secondary={
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit quos modi, et sint soluta delectus itaque ducimus. Eos,
                    quaerat, doloremque at quia reprehenderit quae, quis veniam
                    corrupti illum minus perferendis!
                  </Typography>
                }
              />
            </Paper>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default ChatArea;
