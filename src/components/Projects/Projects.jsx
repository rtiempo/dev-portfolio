import React from 'react';
import { Grid, Stack, Typography, Paper, Card, CardMedia, Button, Divider } from '@mui/material';
import { ProjectsData } from '../../assets/data/data';
import { Fade } from 'react-reveal';

const Projects = () => {
    return (
        <>
            <Stack id='Projects' spacing={6} direction='column' justifyContent='center' mt={6} sx={{ minHeight: '100vh' }}>
                <Fade left duration={750} delay={500} distance="30px">
                    <Typography align='center' variant='h4' color='#14919B'>PROJECTS</Typography>                 
                    <Divider />         
                </Fade>          
                {ProjectsData.map((project, index) => (                      
                    <Grid key={index} container p={2} direction='row' alignItems='center' sx={{ maxWidth: '90vh' }}>
                        <Grid item xs={12} md={4}>
                            <Fade left duration={750} delay={500} distance="30px">
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
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={8}> 
                            <Fade right duration={750} delay={500} distance="30px">
                                <Card elevation={8}>
                                    <CardMedia 
                                        component='img'
                                        src={project.img}
                                        alt={project.img}
                                    />
                                </Card>
                            </Fade>                        
                        </Grid>
                    </Grid>                    
                ))}
            </Stack> 
        </>
    )
}

export default Projects;
