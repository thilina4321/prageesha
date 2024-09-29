// src/components/Sidebar.js

import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Home,
  Settings,
  Dashboard,
  AccountCircle,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState({});
  const navigate = useNavigate();

  const handleClick = (menu) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const menuItems = [
    {
      text: 'Home',
      icon: <Home />,
      subItems: [
        { text: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
        { text: 'Activity', path: '/activity', icon: <Dashboard /> },
      ],
    },
    {
      text: 'Settings',
      icon: <Settings />,
      subItems: [
        { text: 'Profile', path: '/profile', icon: <AccountCircle /> },
        { text: 'Account', path: '/account', icon: <AccountCircle /> },
      ],
    },
  ];

  return (
    
<Drawer
  variant="permanent"
  sx={{
    width: 240,
    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
  }}
>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItemButton onClick={() => handleClick(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {openSubMenu[item.text] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSubMenu[item.text]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItemButton
                    key={subItem.text}
                    sx={{ pl: 4 }}
                    onClick={() => navigate(subItem.path)}
                  >
                    <ListItemIcon>{subItem.icon}</ListItemIcon>
                    <ListItemText primary={subItem.text} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
