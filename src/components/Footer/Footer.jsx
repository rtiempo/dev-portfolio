import React from 'react';
import { Stack, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-scroll';
import { ContactData } from '../../assets/data/data';

const Footer = () => {
    return (
        <>
            <Stack spacing={8} direction='column' alignItems='center' justifyContent='flex-end'>            
                <Link
                    sx={{ color: '#14919B' }} 
                    to='Top' 
                    smooth={true} 
                    duration={1000}>                
                    <IconButton sx={{ color: '#14919B' }} >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </Link>
                <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ maxWidth: '100vh' }}>
                    <Grid item p={2}>
                        <IconButton 
                            sx={{ color: '#14919B' }} 
                            onClick={() => (
                                window.open('mailto:'+ContactData.email+'?subject=Subject&body=Body%20goes%20here')
                            )}>
                            <EmailIcon />
                        </IconButton>
                    </Grid>
                    <Grid item p={2}>
                        <IconButton 
                            sx={{ color: '#14919B' }} 
                            href={ContactData.github} 
                            target='_blank' 
                            rel='noreferrer noopener'>
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    { ContactData.linkedIn ?                     
                        <Grid item p={2}>
                            <IconButton 
                                sx={{ color: '#14919B' }} 
                                href={ContactData.linkedIn} 
                                target='_blank' 
                                rel='noreferrer noopener'>
                                <LinkedInIcon />
                            </IconButton>
                        </Grid> : <></> }
                </Grid>                    
            </Stack>   
        </>
    )
}

export default Footer;
