
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectLanguage({language,langChange}) {


const handleChange=(e)=>{
let value = e.target.value
langChange(value)
}

  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel >Language</InputLabel>
      <Select
      style={{width:"10%",marginBottom:"10px",backgroundColor:"grey"}}
        value={language}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={"java"}>java</MenuItem>
        <MenuItem value={"cpp"}>C++</MenuItem>
        <MenuItem value={"python"}>python</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default SelectLanguage
