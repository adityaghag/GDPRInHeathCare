import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Context } from '../../store/Store';
import PatientDrawer from './PatientDrawer';
import AppointmentsCard from './AppointmentsCard';
import Loading from '../Loading';

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
function createCard(patientsAppos) {


  let card = []

  patientsAppos.map((item) => {
    return card.push(<Grid item key={item._id} xs={3}><AppointmentsCard firstName={item.doctorId.firstName} lastName={item.doctorId.lastName} cat={item.categories} day={item.day} /></Grid>)
  });

  if (card.length === 0)
    return <div style={{ width: '100%', textAlign: 'center' }}><h2>You have no upcoming Appointments</h2></div>
  return card
}

export default function Patient() {
  const [state, dispatch] = useContext(Context);
  const classes = useStyles();


  useEffect(() => {
    const fetchData = async () => {
      const patientId = {
        patientId: localStorage.getItem('userId')
      }
      const res = await fetch("http://localhost:3001/appointments/getAllAppointmentsOfPatient", {
        method: 'post',
        body: JSON.stringify(patientId),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      res.json().then(res => {
        dispatch({ type: 'SET_PATIENT_APPOS', payload: res.appointments });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
    }
    fetchData();
    return () => {
      dispatch({ type: 'SET_LOADING', payload: true });
    };
  }, [dispatch]);




  return (
    < div className={classes.root} >
      <PatientDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          state.loading ? <Loading /> :
            <Grid container spacing={2}>
              {createCard(state.patientAppos)}
            </Grid>
        }
      </main>
    </div >
  );
}
