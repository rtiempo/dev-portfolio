import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ContactData } from '../../assets/data/data';
import { Fade } from 'react-reveal';

const Contact = () => {
  return (
    <>
      <Stack
        id='Contact'
        spacing={6}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh' }}
      >
        <Fade top duration={750} delay={500} distance='30px'>
          <Typography variant='h3' color='#14919B'>
            Get in touch.
          </Typography>
        </Fade>
        <Fade left duration={750} delay={500} distance='30px'>
          <Typography align='center' variant='h5' color='#044E54'>
            Have a project in mind or just wanna say hi?
          </Typography>
        </Fade>
        <Fade bottom duration={750} delay={500} distance='30px'>
          <Button
            startIcon={<ArrowForwardIcon />}
            variant='text'
            onClick={() =>
              window.open(
                'mailto:' +
                  ContactData.email +
                  '?subject=Subject&body=Body%20goes%20here'
              )
            }
          >
            <Typography variant='h4'>Shoot me an email.</Typography>
          </Button>
        </Fade>
      </Stack>
    </>
  );
};

export default Contact;
