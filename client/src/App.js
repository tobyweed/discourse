import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/navbar/navbar';
import Proposition from './components/proposition/proposition';
import BackgroundInformation from './components/background/background'
import CreateBenefit from './components/benefits/createBenefit/createBenefit'


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
      <CreateBenefit />
    </div>
    
  );
}

export default App;
