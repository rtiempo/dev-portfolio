import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppBar, Box, Toolbar, Button, IconButton, Typography } from '@mui/material';
import { Navbar, Hero } from './components';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#ffffff", boxShadow: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }} position="static">
        <Toolbar>
          <Typography color='#2CB1BC' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            u w u
          </Typography>          
          <Button variant='text'>About</Button>
          <Button variant='text'>Skills</Button>
          <Button variant='text'>Projects</Button>
          <Button variant='text'>Contact</Button>
          <Button variant='text'>Resume</Button>
        </Toolbar>
      </AppBar>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
