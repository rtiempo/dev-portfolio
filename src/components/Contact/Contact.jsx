import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Contact = () => {
    return (
        <>
            <Stack id='Contact' spacing={6} direction='column' alignItems='center' justifyContent='center'  sx={{ minHeight: '100vh' }}>
                <Typography variant='h3' color='#14919B'>Get in touch.</Typography>
                <Typography align='center' variant='h5' color='#044E54'>Have a project in mind or just wanna say hi?</Typography>                        
                <Button 
                    startIcon={<ArrowForwardIcon />} 
                    variant="text"
                    onClick={() => (window.open('mailto:jroberttiempo58@gmail.com?subject=Subject&body=Body%20goes%20here')
                    )}>
                    <Typography variant='h4' >Shoot me an email.</Typography>
                </Button>
            </Stack>
        </>
    )
}

export default Contact;
