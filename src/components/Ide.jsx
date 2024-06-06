import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import SelectLanguage from "./SelectLanguage";
import { LANGUAGE_SNIPPETS } from "./Languages";
import { Box } from "@mui/material";
import Compiler from "./Compiler";
import {Button} from "@mui/material";
import "/Users/ayushpal/letsdocode/letsocde/src/App.css"
function Ide() {
  const [language, setLanguage] = useState("java");
  const [value, setValue] = useState(LANGUAGE_SNIPPETS[language]);

  const langChange = (changedLanguage) => {
    setLanguage(changedLanguage);
    let val = LANGUAGE_SNIPPETS[changedLanguage];
    setValue(val);
  };
  useEffect(() => {
    setValue(LANGUAGE_SNIPPETS[language]);
  }, [language]);

  return (
    <>
      <SelectLanguage language={language} langChange={langChange} />
      <Box className="ideMainBox">
        <Editor className="editor" 
          float="left"
          height="100vh"
          width="50%"
          options={{ fontSize: 16 }}
          theme="vs-dark"
          language={language}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
       
        <Compiler value = {value} language = {language}/>
      </Box>
    </>
  );
}

export default Ide;
