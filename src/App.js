import React, { useState } from 'react';

import Navbar from './components/navbar/navbar';

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import Users from './pages/users/';
import Page from './components/page/page';
import Container from './components/container/container';

function App() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
 
  return (
    <>
      <Navbar clicked={click} handleClick={handleClick}/>
     
      <Page clicked={click}>
          <Container>
            <h1>Teste</h1>
          </Container>
        </Page>
 
      
    </>
  );
}

export default App;
