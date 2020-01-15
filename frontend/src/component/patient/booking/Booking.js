import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { MenuList, MenuItem } from '@material-ui/core';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.default,
    padding: theme.spacing(3),
  },
  Button: {
    margin: '12px'
  }
}));


export default function Booking() {
  const [step, setStep] = useState(1);
  const classes = useStyles();
  const [enable, enableBtn] = useState(false);
  const callback = (cat) => {
    enableBtn(true)
  }

  return (
    < div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Appointment Booking
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <MenuList>
          <MenuItem component={Link} to="/patient">Home</MenuItem>
        </MenuList>
        <MenuList>
          <MenuItem component={Link} to="/booking">Book Appointment</MenuItem>
        </MenuList>
        <Divider />
        <MenuList>
          <MenuItem component={Link} to="/reportview">View Reports</MenuItem>
        </MenuList>
        <Divider />
        <MenuList>
          <MenuItem component={Link} to="/patient">Logout</MenuItem>
        </MenuList>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid
          container
          direction="column"
          justify="center"
          spacing={2}
        >
          {step === 1 ? (
            <Step1 parentCallback={callback}></Step1>) :
            step === 2 ? (
              <Step2></Step2>) :
              <Step3></Step3>
          }
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignContent='center'
          spacing={2}
        >
          <Grid item xs>
            {(step !== 1 && step !== 3) ? (
              <Button disabled={enable} variant="contained" color="primary" onClick={() => { setStep(step - 1); enableBtn(false) }} className={classes.Button}>Back</Button>) :
              ''
            }
            {step !== 3 ? (
              <Button disabled={!enable} variant="contained" color="primary" onClick={() => { setStep(step + 1); enableBtn(false) }}>Next</Button>) :
              ''
            }
            {step === 3 ? (
              <React.Fragment>
                <br />
                <Button variant="contained" color="primary" onClick={() => setStep(step + 1)}>Submit</Button>
              </React.Fragment>) :
              ''
            }
          </Grid>
        </Grid>
      </main>
    </div >
  );
}
