import React from 'react';
import { Stack, Typography, Grid, Divider, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Stack spacing={8} direction='column' justifyContent='flex-end'>
                <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ maxWidth: '100vh' }}>
                    <Grid item p={2}>
                        <IconButton 
                            sx={{ color: '#14919B' }} 
                            href='https://mail.google.com/' 
                            target="_blank" 
                            rel="noreferrer noopener">
                            <EmailIcon />
                        </IconButton>
                    </Grid>
                    <Grid item p={2}>
                        <IconButton 
                            sx={{ color: '#14919B' }} 
                            href='https://github.com/rtiempo' 
                            target="_blank" 
                            rel="noreferrer noopener">
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid item p={2}>
                        <IconButton 
                            sx={{ color: '#14919B' }} 
                            href='https://www.linkedin.com/in/robert-tiempo/' 
                            target="_blank" 
                            rel="noreferrer noopener">
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                </Grid>                    
            </Stack>   
        </>
    )
}

export default Footer;
