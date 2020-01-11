import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AdminDrawer from './AdminDrawer';


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
}));


export default function Admin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AdminDrawer></AdminDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Welcome Admin
        </Typography>
      </main>
    </div>
  );
}
