import React from 'react';
import { Navbar, Hero, About, Skills, Projects, Contact } from './components';
import { Grid } from '@mui/material';
import { Wrapper } from './App.styles'

function App() {
  return (
    <> 
      <Navbar />
      <Grid container alignItems='center' justifyContent="center" direction="column" >
        <Grid item xs={12} md={12}>
          <Wrapper>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Wrapper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
