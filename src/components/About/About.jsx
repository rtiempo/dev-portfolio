import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';

const About = () => {
    return (
        <>
            <Grid container alignItems='center' justifyContent='center' direction='column' >
                <Grid item xs={12} md={12}>
                    <Stack spacing={8} alignItems='center' direction='column' justifyContent='center' sx={{ minHeight: '80vh' }}>
                        <Typography variant='h4' color='#14919B'>ABOUT</Typography>                        
                    <Grid container spacing={2} direction='row' alignItems='center' sx={{ maxWidth: '90vh' }}>
                        <Grid item xs={12} md={6}>
                            <Typography color='#044E54'>Insert photo here.</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='subtitle1' color='#102A43'>
                                A hard-working computer science student with a flair
                                for creating effective and efficient solutions in the
                                least amount of time. Has experience in web
                                development both in front end and back end.
                                Able to grasp new concepts quickly and
                                efficiently. Successful working in both team and self-directed settings.
                            </Typography>
                        </Grid>
                    </Grid>                    
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default About;
