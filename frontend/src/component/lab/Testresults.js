import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { MenuList, MenuItem } from '@material-ui/core';

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


export default function Testresults() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            HSRW Lab Dashboard
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
          <MenuItem component={Link} to="/lab">Home</MenuItem>
      </MenuList>
      <MenuList>
          <MenuItem component={Link} to="/pendingtests">Pending Tests</MenuItem>
      </MenuList>
      <MenuList>
          <MenuItem component={Link} to="/testresults">Test Results</MenuItem>
      </MenuList>
      <Divider/>
      <MenuList>
          <MenuItem component={Link} to="/stafflogin">Logout</MenuItem>
      </MenuList>
      </Drawer>
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
