import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/navbar/navbar';
import Proposition from './components/proposition/proposition';
import BackgroundInformation from './components/background/background'
import Benefit from './components/benefits/benefits'


function App() {
  return (
    <div>
      <NavigationBar /> 
      <h1>Proposition:</h1>
      <Proposition  prop='THIS 
      IS A TEST 
      
      PROPOSITION'/>
      <h1>Background:</h1>
      <BackgroundInformation />
      <Benefit bene="BENE EXAMPLE"/>
    </div>
    
  );
}

export default App;
