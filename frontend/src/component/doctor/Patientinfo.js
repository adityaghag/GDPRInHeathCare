import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Cards';
import DoctorDrawer from './DoctorDrawer';
import Grid from '@material-ui/core/Grid';

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
