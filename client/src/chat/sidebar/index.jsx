import React, { useState } from "react";
import Header from "./Header";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";


const Sidebar = ({user}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "25vw", display: "flex", flexDirection:"column", height:"100%"}}>
        <Header user={user}/>

        
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab
            icon={<ChatBubbleOutlineIcon fontSize="small" />}
            iconPosition="start"
            sx={{minHeight: "inherit"}}
            label="Chat List"
          />
          <Tab label="User List" />
        </Tabs>

        {value === 0 && (
          <List sx={{
            p:0,
            overflowY: "auto",
            flex: "1 0 0"
          }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Saurbh Kumar"
                secondary={
                  <Typography variant="caption">Ali Connors</Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Saurbh Kumar"
                secondary={
                  <Typography variant="caption">Ali Connors</Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Saurbh Kumar"
                secondary={
                  <Typography variant="caption">Ali Connors</Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Saurbh Kumar"
                secondary={
                  <Typography variant="caption">Ali Connors</Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Saurbh Kumar"
                secondary={
                  <Typography variant="caption">Ali Connors</Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
          </List>
        )}
        {value === 1 && <UserList />}
      </Box>
    </>
  );
};

export default Sidebar;
