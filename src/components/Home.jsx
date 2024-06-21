import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { CODING_PROBLEM } from '../Problems';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'id', headerName: 'ID', width: 150 },
  { id: 'description', headerName: 'Question', width: 200 },
  { id: 'input', headerName: 'Input', width: 150 },
  { id: 'result', headerName: 'Result', width: 150 },
  {id:'level', headerName:'Level',width:100}
];

function Home() {
  // const rows = CODING_PROBLEM.map((problem, index) => ({
  //   id: index + 1,
  //   description: problem.description,
  //   input: problem["input"].join(', '), 
  //   result: problem["result"]
  // }));

  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (row) => {
    console.log('Navigating to:', `/ProblemIde/${row.id}`); 
    navigate(`/ProblemIde/${row.id}`);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' ,marginTop:"4%"}}>
      <TableContainer sx={{ maxHeight: "70vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {CODING_PROBLEM.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover tabIndex={-1} key={row.id} onClick={() => handleRowClick(row)}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id}>
                      {column.id === 'description' ? (
                        <Link to={`/ProblemIde/${row.id}`}>
                          {value}
                        </Link>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={CODING_PROBLEM.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Home;
