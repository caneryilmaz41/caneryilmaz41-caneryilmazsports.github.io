import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        {['Sıcak', 'Savunma', 'Çocuk', 'Özel Haber', 'Dosya Haber', 'Diğer'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
