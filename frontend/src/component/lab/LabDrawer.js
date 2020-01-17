import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { MenuList, MenuItem } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Auth from '../registeration and login/auth'



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
    toolbar: theme.mixins.toolbar
}));


export default function Lab() {
    const classes = useStyles();

    return (
        <React.Fragment>
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
                    <MenuItem component={Link} to="/bookingappointment">Booking appointment</MenuItem>
                </MenuList>
                <MenuList>
                    <MenuItem component={Link} to="/testresults">Test Results</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/stafflogin" onClick={() => { Auth.logout() }}>Logout</MenuItem>
                </MenuList>
            </Drawer>
        </React.Fragment>
    );
}
