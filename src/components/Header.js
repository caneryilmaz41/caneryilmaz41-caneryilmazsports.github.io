import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ toggleSidebar }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#d32f2f' }}>
      <Toolbar>
        
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TRT HABER
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
