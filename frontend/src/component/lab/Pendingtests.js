import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LabDrawer from './LabDrawer';


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


export default function Pendingtests() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LabDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Pending Results
        </Typography>
      </main>
    </div>
  );
}
