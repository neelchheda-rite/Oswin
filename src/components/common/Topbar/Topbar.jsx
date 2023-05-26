import * as React from 'react';
import { useState } from 'react';
import colorConfigs from "../../../configs/colorConfigs";
import labelConfigs from "../../../configs/labelConfigs";
import sizeConfigs from "../../../configs/sizeConfigs";
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";



const Topbar = () => {
  let navigate= useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
  };
  const handleLogoutUserMenu = async () => {
    await navigate('/login');
    window.sessionStorage.removeItem("Name");
    setAnchorElUser(null);
  };

  return (
    <AppBar 
      position="fixed"
       sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
         height: sizeConfigs.topbar.height,
         backgroundColor: colorConfigs.topbar.bg,
         boxShadow: 0
      }}
    >
     
      <Toolbar>
      
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              mt:0,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 200,
              color: colorConfigs.topbar.color,
              textDecoration: 'none',
            }}
          >
            {labelConfigs.topBarName.name}
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 200,
              color: "#eeeeee",
              textDecoration: 'none',
              my:2
            }}
          >
            {labelConfigs.topBarName.name}
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box sx={{ flexGrow: 0 }} display="flex" justifyContent="flex-end">
            <Tooltip title="View Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p:0 }}>
                <Avatar alt={window.sessionStorage.getItem("Name")} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '42px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <MenuItem  onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem  onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Settings</Typography>
            </MenuItem>
            <MenuItem icon={<LogoutRoundedIcon />}  onClick={handleLogoutUserMenu}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
             
            </Menu>
          </Box>
        </Toolbar>
      <Outlet />        
    </AppBar>
  );
};

export default Topbar;