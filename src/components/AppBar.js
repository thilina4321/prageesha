// src/components/AppBar.js

import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

const AppBar = () => (
  <MuiAppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" noWrap>
        My Application
      </Typography>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
