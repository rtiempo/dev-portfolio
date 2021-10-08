import React from 'react';
import { Typography, Stack } from '@mui/material';

const Hero = () => {
    return (
        <>
            <Stack p={3} direction='column' justifyContent='center'  sx={{ minHeight: '100vh' }}>
                <Typography variant='h5' color='#044E54'>Hi, my name is</Typography>
                <Typography variant='h3' color='#14919B'>John Robert Tiempo.</Typography>
                <Typography variant='h4' color='#102A43'>I'm a full stack developer.</Typography>
            </Stack>                
        </>
    )
}

export default Hero;