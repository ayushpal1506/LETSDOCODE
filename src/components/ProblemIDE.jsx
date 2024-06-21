import React, { useEffect, useState } from 'react';
import { Box, Paper } from '@mui/material';
import { Editor } from '@monaco-editor/react';
import SelectLanguage from './SelectLanguage';
import { LANGUAGE_SNIPPETS } from './Languages';
import { useLocation, useParams } from 'react-router-dom';
import { CODING_PROBLEM } from '../Problems';

function ProblemIDE() {
  const [language, setLanguage] = useState('java');
  const [value, setValue] = useState(LANGUAGE_SNIPPETS[language]);
  const [problem, setProblem] = useState();
  const { problemid } = useParams();

  useEffect(() => {
    const selectedProblem = CODING_PROBLEM.find((p) => p.id === parseInt(problemid, 10));
    if (selectedProblem) {
      setProblem(selectedProblem);

    } else {
      setProblem(null); // Handle case where problem is not found
    }
  }, [problemid]);

  const langChange = (changedLanguage) => {
    setLanguage(changedLanguage);
    let val = LANGUAGE_SNIPPETS[changedLanguage];
    setValue(val);
  };

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '30% 70%' }}>
      <Box sx={{ height: '100vh', backgroundColor: 'wheat', color: 'black', padding: '3%' }}>
        <h2 style={{ color: 'black' }}>Question :</h2>
        <h3>{problem ? problem.description : 'Loading problem...'}</h3>

        <Paper elevation={3} sx={{ backgroundColor: 'black', color: 'white', height: '40vh', padding: '7%' ,marginTop:"15%"}}>
          <h4>Example :</h4>
          <h5>Input:</h5>
         [{problem?.input}]

          <h5>Expected Output:</h5>
          {problem?.result}

          <h5>Explanation:</h5>
          {problem?.explaination}
        </Paper>
      </Box>
      <Box sx={{ marginTop: '-5%', padding: '10px' }}>
        <SelectLanguage language={language} langChange={langChange} />
        <Editor
          className="editor"
          height="60vh"
          width="100%"
          options={{ fontSize: 16 }}
          theme="vs-dark"
          language={language}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    </Box>
  );
}

export default ProblemIDE;
