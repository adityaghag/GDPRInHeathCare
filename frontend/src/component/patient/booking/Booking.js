import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Patient from '../Patient';
import { Context } from '../../../store/Store';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import './booking.css'
import PatientDrawer from '../PatientDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  const [state, dispatch] = useContext(Context);
  const classes = useStyles();
  // eslint-disable-next-line
  const [enable, enableBtn] = useState(false);
  const callback = (cat) => {
    enableBtn(true)
  }

  return (
    < div className={classes.root} >
      <PatientDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid
          container
          justify="center"
          spacing={2}
        >
          {state.bookingStep === 1 ? (
            <Step1 parentCallback={callback}></Step1>) :
            state.bookingStep === 2 ? (
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
            {(state.bookingStep !== 1 && state.bookingStep !== 3) ? (
              <Button variant="contained" color="primary" onClick={() => { dispatch({ type: 'DEC_BOOKING_STEP' }); enableBtn(false) }} className={classes.Button}>Back</Button>) :
              ''
            }
            {state.bookingStep !== 3 ? (
              <Button variant="contained" color="primary" onClick={() => { dispatch({ type: 'INC_BOOKING_STEP' }); enableBtn(false) }}>Next</Button>) :
              ''
            }
            <Snackbar
              open={state.openSnack}
              TransitionComponent={Fade}
              message='Your Appointment has been booked'
            />
          </Grid>
        </Grid>
      </main>
    </div >
  );
}
