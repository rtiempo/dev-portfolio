import React from 'react';
import { Grid, Stack, Typography, Button } from '@mui/material';

const Contact = () => {
    return (
        <>
            <Grid container alignItems='center' justifyContent="center" direction="column" >
                <Grid item xs={12} md={12}>
                    <Stack spacing={6} direction='column' alignItems='center' justifyContent='center'  sx={{ minHeight: '100vh' }}>
                        <Typography variant='h3' color='#14919B'>Get in touch.</Typography>
                        <Typography variant='h5' color='#044E54'>Have a project in mind or just wanna say hi?</Typography>                        
                        <Button variant="text"><Typography variant='h4' >Shoot me an email.</Typography></Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact;
