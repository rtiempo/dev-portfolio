import React from 'react';
import { Navbar, Hero, About, Skills, Projects, Contact, Footer, PageNotFound } from './components';
import { Grid } from '@mui/material';
import { Wrapper } from './App.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <> 
      <Router>
        <Switch>
          <Route exact path='/'>
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
                <Footer />
              </Grid>
            </Grid> 
          </Route>
          <Route exact path=''>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>        
    </>
  );
}

export default App;
