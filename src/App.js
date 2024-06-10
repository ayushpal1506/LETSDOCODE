import "./App.css";
import React from "react";
import Ide from "./components/Ide";
import Home from "./components/Home";
import { Button } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (<>

    <BrowserRouter>
      <div className="App">
        
        <header className="App-header">
          <Link to="/">
            <Button>HOME</Button>
          </Link>
          <Link to="/ide">
            <Button>IDE</Button>
          </Link>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ide" element={<Ide />} />
        </Routes>
        </header>
      </div>
    
    </BrowserRouter>

    </>
  );
}

export default App;
