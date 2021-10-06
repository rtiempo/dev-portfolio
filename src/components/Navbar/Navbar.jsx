import React from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const Navbar = () => {
    return (
        <>
            <AppBar sx={{ backgroundColor: "#ffffff", boxShadow: 'none' }} position="absolute">
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
            </AppBar>
        </>
    )
}

export default Navbar;
