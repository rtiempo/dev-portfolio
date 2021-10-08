import React from 'react';
import { Grid, Stack, Typography, Divider } from '@mui/material';


const Skills = () => {
    return (
        <>
            <Stack id='Skills' spacing={2} direction='column' justifyContent='center' sx={{ minHeight: '80vh' }}>
                <Typography mb={2} align='center' variant='h4' color='#14919B'>SKILLS</Typography>   
                <Divider />              
                <Grid container direction='row' alignItems='flex-start'>                        
                    <Grid item xs={12} md={4} mb={4}>
                        <Typography mb={2} align='center' variant='h5' color='#044E54'>Languages</Typography>                            
                        <Typography mb={2} align='center' color='#102A43'>Javascript</Typography>
                        <Typography mb={2} align='center' color='#102A43'>HTML</Typography>
                        <Typography mb={2} align='center' color='#102A43'>CSS</Typography>
                        <Typography mb={2} align='center' color='#102A43'>SQL</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Dart</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} mb={4}>
                        <Typography mb={2} align='center' variant='h5' color='#044E54'>Libraries & Frameworks</Typography>
                        <Typography mb={2} align='center' color='#102A43'>React</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Node.js</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Express</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Material UI</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Styled Components</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Flutter</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} mb={4}>
                        <Typography mb={2} align='center' variant='h5' color='#044E54'>Tools & Platforms</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Git</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Firebase</Typography>
                        <Typography mb={2} align='center' color='#102A43'>Figma</Typography>
                    </Grid>
                </Grid>                    
            </Stack>
        </>
    )
}

export default Skills;
