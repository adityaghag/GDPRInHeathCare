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
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';


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
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'upload',
    label: 'Upload',
    minWidth: 170,
    align: 'right',
  }
];

function createData(patientId, testType, date, upload) {

  return { patientId, testType, date, upload };
}

const rows = [
  createData('11111', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='11111' style={{ display: 'none' }} /> <label htmlFor='11111'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
  createData('22222', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='22222' style={{ display: 'none' }} /> <label htmlFor='22222'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
  createData('33333', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='33333' style={{ display: 'none' }} /> <label htmlFor='33333'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
  createData('44444', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='44444' style={{ display: 'none' }} /> <label htmlFor='44444'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
  createData('55555', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='55555' style={{ display: 'none' }} /> <label htmlFor='55555'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
  createData('66666', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='66666' style={{ display: 'none' }} /> <label htmlFor='66666'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
  createData('77777', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='77777' style={{ display: 'none' }} /> <label htmlFor='77777'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
  createData('88888', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='88888' style={{ display: 'none' }} /> <label htmlFor='88888'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
  createData('99999', 'Bold', '11/12/2019', <React.Fragment><input type="file" id='99999' style={{ display: 'none' }} /> <label htmlFor='99999'><Button component="span" startIcon={<CloudUploadIcon />}></Button></label></React.Fragment>),
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
