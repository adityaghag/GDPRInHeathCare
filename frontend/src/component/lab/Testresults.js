import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LabDrawer from './LabDrawer';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.default,
    padding: theme.spacing(3),
  }
}));


export default function Testresults() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LabDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Test Results
        </Typography>
      </main>
    </div>
  );
}
