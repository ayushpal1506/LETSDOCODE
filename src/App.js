
import './App.css';
import React from 'react';
import Ide from './components/Ide';
import NavigationBar from './components/NavigationBar';


function App() {

  return (
    <div className="App"> 
      <header className="App-header">
        
        <NavigationBar/>
    <Ide/>
   
      </header>
    </div>
  );
}

export default App;
