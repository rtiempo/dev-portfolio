import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Contact = () => {
    return (
        <>
            <Stack spacing={6} direction='column' alignItems='center' justifyContent='center'  sx={{ minHeight: '100vh' }}>
                <Typography variant='h3' color='#14919B'>Get in touch.</Typography>
                <Typography align='center' variant='h5' color='#044E54'>Have a project in mind or just wanna say hi?</Typography>                        
                <Button startIcon={<ArrowForwardIcon />} variant="text"><Typography variant='h4' >Shoot me an email.</Typography></Button>
            </Stack>
        </>
    )
}

export default Contact;