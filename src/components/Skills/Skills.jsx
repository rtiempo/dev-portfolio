import React from 'react';
import { Grid, Stack, Typography, List, ListItem } from '@mui/material';

const Skills = () => {
    return (
        <>
            <Grid container alignItems='center' justifyContent='center' direction='column' sx={{ mt: '100px' }}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={2} alignItems='center' direction='column' justifyContent='center' sx={{ minHeight: '80vh' }}>
                        <Typography variant='h4' color='#14919B'>SKILLS</Typography>                        
                    <Grid container spacing={8} direction='row' justifyContent="space-around" alignItems='flex-start'>                        
                        <Grid item xs={12} md={4}>
                            <Typography variant='h5' color='#044E54'>Languages</Typography>
                            <List>
                                <ListItem>
                                    <Typography color='#102A43'>Javascript</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>HTML</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>CSS</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>SQL</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>Dart</Typography>
                                </ListItem>
                            </List>                                
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant='h5' color='#044E54'>Libraries & Frameworks</Typography>
                            <List>
                                <ListItem>
                                    <Typography color='#102A43'>React</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>Node.js</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>Express</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>Material UI</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>Styled Components</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color='#102A43'>Flutter</Typography>
                                </ListItem>
                            </List>                                 
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant='h5' color='#044E54'>Tools & Platforms</Typography>
                                <List>
                                    <ListItem>
                                        <Typography color='#102A43'>Git</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography color='#102A43'>Firebase</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography color='#102A43'>Figma</Typography>
                                    </ListItem>
                                </List>
                        </Grid>
                    </Grid>                    
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Skills;
