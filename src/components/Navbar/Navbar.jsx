import React from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Navbar.styles';

const Navbar = () => {
    return (
        <>
            {/* <AppBar sx={{ backgroundColor: "#ffffff", boxShadow: 'none' }} position="absolute">
                <Toolbar>
                    <Typography color='inherit' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        u w u
                    </Typography>          
                    <Button variant='text'>About</Button>
                    <Button variant='text'>Skills</Button>
                    <Button variant='text'>Projects</Button>
                    <Button variant='text'>Contact</Button>
                    <Button variant='outlined' startIcon={<InsertDriveFileIcon />}>Resume</Button>
                </Toolbar>
            </AppBar> */}
            <Nav>
                <NavLink to='/'>                
                </NavLink>
                <Bars />
                <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/services' activeStyle>
                    Services
                </NavLink>
                <NavLink to='/contact-us' activeStyle>
                    Contact Us
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
