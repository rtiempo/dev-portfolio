import React from 'react';
import { Typography, Stack, Grid } from '@mui/material';

const Hero = () => {
    return (
        <>
            <Grid container alignItems='center' justifyContent="center" direction="column" >
                <Grid item xs={12} md={12}>
                    <Stack spacing={0} direction='column' justifyContent='center'  sx={{ minHeight: '100vh' }}>
                        <Typography variant='h5' color='#044E54'>Hi, my name is</Typography>
                        <Typography variant='h3' color='#14919B'>John Robert Tiempo.</Typography>
                        <Typography variant='h4' color='#102A43'>I'm a full stack developer.</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Hero;