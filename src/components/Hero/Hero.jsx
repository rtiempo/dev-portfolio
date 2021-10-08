import React from 'react';
import { Typography, Stack } from '@mui/material';
import { HeroData } from '../../assets/data/data';
import { Fade } from 'react-reveal';

const Hero = () => {
    return (
        <>
            <Stack p={3} direction='column' justifyContent='center'  sx={{ minHeight: '100vh' }}>
                <Fade left duration={750} delay={500} distance="30px">
                    <Typography variant='h5' color='#044E54'>Hi, my name is</Typography>
                    <Typography variant='h3' color='#14919B'>{HeroData.name}.</Typography>
                    <Typography variant='h4' color='#102A43'>I'm a {HeroData.title}.</Typography>
                </Fade>
            </Stack>                
        </>
    )
}

export default Hero;