import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import CommentIcon from '@mui/icons-material/Comment';

function Home() {
  return (
    <List sx={{ width: '100vw', maxWidth: 360, bgcolor: 'black', color:"white"}}>
      {[1, 2, 3,4,5,6].map((value) => (
        <ListItem
          key={value}

        //   secondaryAction={
        //     <IconButton aria-label="comment">
        //       <CommentIcon />
        //     </IconButton>
        //   }
        >
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>
  )
}

export default Home
