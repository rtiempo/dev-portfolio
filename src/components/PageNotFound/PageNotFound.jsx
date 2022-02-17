import React from 'react';
import { Stack, Typography, Button, Grid } from '@mui/material';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PageNotFound = () => {
  return (
    <>
      <Grid
        p={2}
        container
        alignItems='center'
        justifyContent='center'
        direction='column'
      >
        <Stack
          id='About'
          spacing={8}
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{ minHeight: '80vh' }}
        >
          <Fade left duration={750} delay={500} distance='30px'>
            <Typography align='center' variant='h3' color='#14919B'>
              OOPS
            </Typography>
          </Fade>
          <Fade bottom duration={750} delay={500} distance='30px'>
            <Typography align='center' variant='h4' color='#102A43'>
              We can't find the page you're looking for.
            </Typography>
          </Fade>
          <Fade bottom duration={750} delay={1500} distance='30px'>
            <Typography align='center' variant='h6' color='#044E54'>
              ಥ_ಥ
            </Typography>
          </Fade>
          <Fade right duration={750} delay={1500} distance='30px'>
            <Button
              startIcon={<ArrowBackIcon />}
              component={Link}
              to='/'
              variant='outlined'
              sx={{ minWidth: '352px' }}
            >
              Go Home
            </Button>
          </Fade>
        </Stack>
      </Grid>
    </>
  );
};

export default PageNotFound;
