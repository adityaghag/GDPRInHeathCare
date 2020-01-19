import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Context } from '../../store/Store';
import PatientDrawer from './PatientDrawer';
import AppointmentsCard from './AppointmentsCard';

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
function createCard() {
  let patients = [
    { patientId: '1', gender: 'm', age: 20, medicalHistory: 'test1' },
    { patientId: '2', gender: 'w', age: 25, medicalHistory: 'test2' },
    { patientId: '3', gender: 'w', age: 23, medicalHistory: 'test3' },
    { patientId: '4', gender: 'm', age: 29, medicalHistory: 'test4' },
    { patientId: '5', gender: 'm', age: 50, medicalHistory: 'test5' },
  ]

  let card = []

  patients.map((item) => {
    return card.push(<Grid item key={item.patientId} xs={3}><AppointmentsCard gender={item.gender} age={item.age} medicalHistory={item.medicalHistory} /></Grid>)
  });

  return card
}

export default function Patient() {
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
        <Grid container spacing={4}>
          {createCard()}
        </Grid>
      </main>
    </div >
  );
}
