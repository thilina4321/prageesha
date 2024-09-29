// src/components/Footer.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      px: 2,
      mt: 'auto', // Push the footer to the bottom
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      textAlign: 'center',
    }}
  >
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} My Application
    </Typography>
  </Box>
);

export default Footer;
