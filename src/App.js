// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import AppBar from './components/AppBar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        {/* AppBar at the top */}
        <AppBar />

        {/* Main content area */}
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: { sm: '240px' }, // Adjust main content margin for the sidebar
              mt: 8, // Adjust for the AppBar height
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Account />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>

        {/* Footer at the bottom */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
