import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";
import '/Users/ayushpal/letsdocode/letsocde/src/App.css';

function Compiler({ value, language }) {

    const [display,setdisplay] = useState("Press RUN button")

    // const fetchLanguages = async () => {
    //   try {
    //     const res = await axios.get("https://emkc.org/api/v2/piston/runtimes");
    //     console.log(res.data);
    //   } catch (error) {
    //     console.error("Error fetching languages:", error);
    //   }
    // };
    
    // fetchLanguages();
    
  const Runcode = async (language, code) => {
    try {
      const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: language,
        version: "15.0.2", 
        files: [
          {
            name: 'main.java',
            content: code
          }
        ],
        // stdin: "",
        // args: [],
        // compile_timeout: 10000,
        // run_timeout: 3000,
        // compile_memory_limit: -1,
        // run_memory_limit: -1
      });
      return res.data.run.output;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const onclickhandle = async () => {
 
    const data = await Runcode(language, value);
    setdisplay(data)
  };

  return (
    <div className="compilerContainer">
      <Button color="secondary" onClick={onclickhandle} style={{ borderRadius: "5px", border: "1px solid green" }}>RUN</Button>
      <Box className="compilerMainBox">

            {display}

      </Box>
    </div>
  );
}

export default Compiler;
