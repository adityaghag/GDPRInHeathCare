import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DoctorDrawer from './DoctorDrawer';

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
}));


export default function Doctor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DoctorDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Welcome Doctor Sahab !
        </Typography>
        <Typography paragraph>
          Sabko jaadu ki jhappi do
        </Typography>
      </main>
    </div>
  );
}
