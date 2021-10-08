import React from 'react';
import { Grid, Stack, Typography, Paper, Card, CardMedia, Button, Divider } from '@mui/material';
import chatAppImg from '../../assets/imgs/chatapp_comp.jpg';
import ecomImg from '../../assets/imgs/ecom_comp.jpg';

const Projects = () => {
    return (
        <>
            <Stack id='Projects' spacing={6} direction='column' justifyContent='center' mt={6} sx={{ minHeight: '100vh' }}>
                <Typography align='center' variant='h4' color='#14919B'>PROJECTS</Typography>                 
                <Divider />                   
                <Grid container direction='row' alignItems='flex-start' sx={{ maxWidth: '90vh' }}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2} alignItems='flex-start' direction='column' sx={{ p: 2 }}>                            
                            <Typography variant='h5' color='#044E54'>ChatApp</Typography>
                            <Grid container spacing={1} direction='row'>
                                <Grid item>
                                    <Paper sx={{ p: 1 }}>
                                        <Typography variant='body1' color='#14919B'>Dart</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper sx={{ p: 1 }}>
                                        <Typography variant='body1' color='#14919B'>Flutter</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>                            
                            <Typography variant='subtitle1' color='#102A43'>
                                A messaging mobile app built using Flutter and Firebase.
                            </Typography>
                            <Button variant="outlined">Live Demo</Button>
                            <Button variant="outlined">Source Code</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>   
                        <Card elevation={8}>
                            <CardMedia 
                                component='img'
                                image={chatAppImg}
                                alt='chat_app_img'
                            />
                        </Card>                        
                    </Grid>
                </Grid>                    
                <Grid container direction='row' alignItems='flex-start' sx={{ maxWidth: '90vh' }}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2} alignItems='flex-start' direction='column' sx={{ p: 2 }}>                            
                            <Typography variant='h5' color='#044E54'>Ecom</Typography>
                            <Grid container spacing={1} direction='row'>
                                <Grid item>
                                    <Paper sx={{ p: 1 }}>
                                        <Typography variant='body1' color='#14919B'>Dart</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper sx={{ p: 1 }}>
                                        <Typography variant='body1' color='#14919B'>Flutter</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>                            
                            <Typography variant='subtitle1' color='#102A43'>
                                A basic Ecommerce webapp built using React.
                            </Typography>
                            <Button variant="outlined">Live Demo</Button>
                            <Button variant="outlined">Source Code</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>               
                        <Card elevation={8}>
                            <CardMedia 
                                component='img'
                                image={ecomImg}
                                alt='chat_app_img'                                    
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Stack> 
        </>
    )
}

export default Projects;
