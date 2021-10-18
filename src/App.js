import React, { useState } from 'react';

import Navbar from './components/navbar/navbar';

import { Switch, Route, useLocation } from 'react-router-dom';

import Dashboard from  './pages/dashboard/';
import Users from './pages/users/';
import Materials from './pages/materials';
import CostCenters from './pages/costcenters';

import Page from './components/page/page';
import Container from './components/container/container';

function App() {

  const location = useLocation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
 
  return (
    <>
      <Navbar clicked={click} handleClick={handleClick}/>
     
      <Page clicked={click}>
          <Container>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/users" component={Users} />
              <Route path="/materials" component={Materials} />
              <Route path="/costcenters" component={CostCenters} />
            </Switch>
          </Container>
        </Page>
 
      
    </>
  );
}

export default App;
