import React from 'react';
import { Grid, Stack, Typography, Paper, Card, CardMedia, Button, Divider } from '@mui/material';
import chatAppImg from '../../assets/imgs/chatapp_comp.jpg';
import ecomImg from '../../assets/imgs/ecom_comp.jpg';
import { ProjectsData } from '../../assets/data/data';

const Projects = () => {
    return (
        <>
            <Stack id='Projects' spacing={6} direction='column' justifyContent='center' mt={6} sx={{ minHeight: '100vh' }}>
                <Typography align='center' variant='h4' color='#14919B'>PROJECTS</Typography>                 
                <Divider />                   
                {ProjectsData.map((project, index) => (                      
                    <Grid key={index} container p={2} direction='row' alignItems='center' sx={{ maxWidth: '90vh' }}>
                        <Grid item xs={12} md={4}>
                            <Stack spacing={2} alignItems='flex-start' direction='column' sx={{ p: 2 }}>                            
                                <Typography variant='h5' color='#044E54'>{project.title}</Typography>
                                <Grid container spacing={1} direction='row'>
                                    {project.stack.map((stack, index) => (
                                        <Grid item key={index}>
                                            <Paper sx={{ p: 1 }}>
                                                <Typography variant='body1' color='#14919B'>{stack}</Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>                            
                                <Typography variant='subtitle1' color='#102A43'>
                                    {project.info}
                                </Typography>
                                { project.url ?                             
                                    <Button 
                                        variant="outlined"
                                        href={project.url} 
                                        target='_blank' 
                                        rel='noreferrer noopener'>
                                        Live Demo
                                    </Button> : <></> }
                                { project.repo ?                             
                                    <Button 
                                        variant="outlined"
                                        href={project.repo} 
                                        target='_blank' 
                                        rel='noreferrer noopener'>
                                        Source Code
                                    </Button> : <></> }                                
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={8}> 
                            <Card elevation={8}>
                                <CardMedia 
                                    component='img'
                                    src={project.img}
                                    alt={project.img}
                                />
                            </Card>                        
                        </Grid>
                    </Grid>                    
                ))}
            </Stack> 
        </>
    )
}

export default Projects;
