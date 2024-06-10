import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import CommentIcon from '@mui/icons-material/Comment';
import { CODING_PROBLEM } from '../Problems';
function Home() {

const column = [{
  id: "Q.no",
  label:"index : ",
  minWidth: 170,
},
{
  id :"Question",
  label: "question :",
  align:"right",
  minWidth: 170,

},
{
  id:"level",
  label:"level :",
  align:"right",
  minWidth: 170,
}
]




  console.log(CODING_PROBLEM[2])
  return (
//     <List sx={{ width: '100vw', maxWidth: 360, bgcolor: 'black', color:"white"}}>
//       {CODING_PROBLEM.map((value,index) => (
//         <ListItem
//           key={index}

//         //   secondaryAction={
//         //     <IconButton aria-label="comment">  
//         //       <CommentIcon />
//         //     </IconButton>
//         //   }
//         >
// <ListItemText primary={value?.Question?.description || 'No description available'} />
 
//         </ListItem>
//       ))}
//     </List>










<Paper sx={{ width: '100%',backgroundColor:"black",color:"white" }}>
<TableContainer sx={{ maxHeight: 440 }}>
  <Table stickyHeader aria-label="sticky table">
    <TableHead>
    
      <TableRow>
        {column.map((col) => (
          <TableCell
            key={col.id}
            align={col.align}
            style={{ top: 57, minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {CODING_PROBLEM.map((row) => {
          return (
            <TableRow hover role="checkbox" >
              {column.map((col) => {
                const value = row[col.id];
                return (
                  <TableCell key={col.id} align={col.align}>
                    {col.format && typeof value === 'number'
                      ? col.format(value)
                      : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>
  </Table>
</TableContainer>

</Paper>


  )
}

export default Home
