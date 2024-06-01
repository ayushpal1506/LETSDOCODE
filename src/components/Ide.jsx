// import React, { useState,useEffect } from 'react'
// import { Editor } from '@monaco-editor/react'
// import SelectLanguage from './SelectLanguage'
// import {LANGUAGE_SNIPPETS}  from './Languages'
// function Ide() {
//   const [language,setlanguage] = useState("java")
// const [value,setvalue] = useState(LANGUAGE_SNIPPETS[language])

// const langchange=(changedlanguage)=>{
// setlanguage(changedlanguage)
// }
// useEffect(() => {
//   setvalue(LANGUAGE_SNIPPETS[language]);
// }, [language]);

//   return (
//     <> 
// <SelectLanguage  language = {language} langchange = {langchange}/>
// <Editor height="90vh" width="60%" options={{fontSize:16}}
//         theme='vs-dark' color language={language} defaultValue= {value} />

//     </>
//   )
// }

// export default Ide

import React, { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import SelectLanguage from './SelectLanguage';
import { LANGUAGE_SNIPPETS } from './Languages';

function Ide() {
  const [language, setLanguage] = useState("java");
  const [value, setValue] = useState(LANGUAGE_SNIPPETS[language]);

  const langChange = (changedLanguage) => {
    setLanguage(changedLanguage);
    let val = LANGUAGE_SNIPPETS[changedLanguage];
    setValue(val);
  };

  // Ensure the value updates correctly when the language changes
  useEffect(() => {
    setValue(LANGUAGE_SNIPPETS[language]);
  }, [language]);

  return (
    <> 
      <SelectLanguage language={language} langChange={langChange} />
      <Editor 
        height="90vh" 
        width="60%" 
        options={{ fontSize: 16 }} 
        theme='vs-dark' 
        language={language} 
        value={value} 
        onChange={(newValue) => setValue(newValue)}
      />
    </>
  );
}

export default Ide;
