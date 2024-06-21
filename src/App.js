import "./App.css";
import React from "react";
import Ide from "./components/Ide";
import Home from "./components/Home";
import { Button } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProblemIDE from "./components/ProblemIDE";

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
          <Route path="/ProblemIde/:problemid" element={<ProblemIDE />} />
        </Routes>
        </header>
      </div>
    
    </BrowserRouter>

    </>
  );
}

export default App;
