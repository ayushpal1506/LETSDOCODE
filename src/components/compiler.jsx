import React from "react";
import { Box, Button } from "@mui/material";
import '/Users/ayushpal/letsdocode/letsocde/src/App.css';

function Compiler() {
  return (
    <div className="compilerContainer">
      <Button color="secondary" style={{borderRadius:"5px",border:"1px solid green"}}>RUN</Button>
      <Box className="compilerMainBox">
        content stays here    
      </Box>
    </div>
  );
}

export default Compiler;
