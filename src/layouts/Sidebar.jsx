import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
      </List>
      <Divider />
      {/* Additional items can be added below the divider */}
    </Drawer>
  );
};

export default Sidebar;
