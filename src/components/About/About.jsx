import React from 'react';
import { Grid, Stack, Typography, Divider } from '@mui/material';
import { AboutData } from '../../assets/data/data';
import { Fade } from 'react-reveal';

const About = () => {
  return (
    <>
      <Stack
        id='About'
        spacing={8}
        direction='column'
        justifyContent='center'
        sx={{ minHeight: '80vh' }}
      >
        <Fade left duration={750} delay={500} distance='30px'>
          <Typography align='center' variant='h4' color='#14919B'>
            ABOUT
          </Typography>
          <Divider />
        </Fade>
        <Fade bottom duration={750} delay={500} distance='30px'>
          <Grid
            container
            direction='row'
            alignItems='center'
            sx={{ maxWidth: '100vh' }}
          >
            <Grid item xs={12} md={12} mb={4}>
              <Typography align='center' color='#044E54'>
                'っ◔◡◔)っ'
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} p={2}>
              <Typography align='center' variant='subtitle1' color='#102A43'>
                {AboutData.body}
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Stack>
    </>
  );
};

export default About;
