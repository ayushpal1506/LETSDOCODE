
import './App.css';
import React from 'react';
import Ide from './components/Ide';
import { Button } from '@mui/material';
import Home from './components/Home';



function App() {

  return (
    <div className="App"> 
      <header className="App-header">

        <Button> HOME</Button>
        <Home></Home>

    <Ide/>
   
      </header>
    </div>
  );
}

export default App;
