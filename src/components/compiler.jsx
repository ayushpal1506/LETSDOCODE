import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";
import '/Users/ayushpal/letsdocode/letsocde/src/App.css';
import { Lang_ver } from "./Languages";
function Compiler({ value, language }) {
  const [display, setdisplay] = useState("Press RUN button")
  const [loading, setLoading] = useState(false);

  const Runcode = async (language, code) => {
    try {
      const languagVersion = await Lang_ver();
      const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: language,
        version:languagVersion[language] ,
        files: [
          {
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
    setLoading(true)
    const data = await Runcode(language, value);
    setdisplay(data)
    setLoading(false)
  };

  return (
    <div className="compilerContainer">
      <Button color="secondary" onClick={onclickhandle} style={{ borderRadius: "5px", border: "1px solid green" }}>{loading ? "Running..." : "Run"}</Button>
      <Box className="compilerMainBox">
        {loading ? (
          "Loading ......"
        ) : (
          display
        )}
      </Box>
    </div>
  );
}

export default Compiler;
