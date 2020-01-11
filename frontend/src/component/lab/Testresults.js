import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LabDrawer from './LabDrawer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  mainRoot: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.default,
    padding: theme.spacing(3),
  },
  container: {
    maxHeight: 440,
  }
}));



const columns = [
  { id: 'patientId', label: 'Patient\u00a0Id', minWidth: 100 },
  {
    id: 'testType',
    label: 'Test\u00a0Type',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'date',
    label: 'Date\u00a0',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  }
];

function createData(patientId, testType, date) {

  return { patientId, testType, date };
}

const rows = [
  createData('11111', 'Bold', '11/12/2019'),
  createData('22222', 'Bold', '11/12/2019'),
  createData('33333', 'Bold', '11/12/2019'),
  createData('44444', 'Bold', '11/12/2019'),
  createData('55555', 'Bold', '11/12/2019'),
  createData('66666', 'Bold', '11/12/2019'),
  createData('77777', 'Bold', '11/12/2019'),
  createData('88888', 'Bold', '11/12/2019'),
  createData('99999', 'Bold', '11/12/2019'),
];

export default function Testresults() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div className={classes.mainRoot}>
      <LabDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.patientId}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </main>
    </div>
  );
}
