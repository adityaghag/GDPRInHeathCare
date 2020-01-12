import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Cards';
import DoctorDrawer from './DoctorDrawer';
<<<<<<< HEAD
import { List } from '@material-ui/core';

=======
import Grid from '@material-ui/core/Grid';
>>>>>>> 874feca2c68eb1adc187df1a47ee49e98509545c

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.default,
    padding: theme.spacing(3),
  }
}));



<<<<<<< HEAD
=======
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
    return card.push(<Grid item key={item.patientId} xs={3}><Cards gender={item.gender} age={item.age} medicalHistory={item.medicalHistory} /></Grid>)
  });

  return card
}

>>>>>>> 874feca2c68eb1adc187df1a47ee49e98509545c
export default function Patientinfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DoctorDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={4}>
          {createCard()}
        </Grid>
      </main>
    </div>
  );
}
