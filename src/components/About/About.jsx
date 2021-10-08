import React from 'react';
import { Grid, Stack, Typography, Divider } from '@mui/material';
import { AboutData } from '../../assets/data/data';

const About = () => {
    return (
        <>
            <Stack id='About' spacing={8} direction='column' justifyContent='center' sx={{ minHeight: '80vh' }}>
                <Typography align='center' variant='h4' color='#14919B'>ABOUT</Typography>          
                <Divider />              
                <Grid container direction='row' alignItems='center' sx={{ maxWidth: '100vh' }}>
                    <Grid item xs={12} md={12} mb={4}>
                        <Typography align='center' color='#044E54'>'っ◔◡◔)っ'</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} p={2}>
                        <Typography align='center' variant='subtitle1' color='#102A43'>
                            {AboutData.body}
                        </Typography>
                    </Grid>
                </Grid>                    
            </Stack>
        </>
    )
}

export default About;
