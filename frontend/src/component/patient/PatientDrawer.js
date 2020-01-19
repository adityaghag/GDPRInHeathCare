import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { MenuList, MenuItem } from '@material-ui/core';
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


export default function PatientDrawer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        HSRW Patient Dashboard
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
                    <MenuItem component={Link} to="/patient">Home</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/reportupload">Upload Reports</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/booking">Booking Appointment</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/reportview">View Reports</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/login" onClick={() => { Auth.logout() }}>Logout</MenuItem>
                </MenuList>
            </Drawer>
        </React.Fragment>
    );
}
