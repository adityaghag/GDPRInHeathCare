import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BackupRoundedIcon from '@material-ui/icons/BackupRounded';
import BookRoundedIcon from '@material-ui/icons/BookRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
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
        backgroundColor:"#000000",
        
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:"#191919",
        color:"white",
        fontSize: 24,
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
                    <MenuItem component={Link} to="/patient"><HomeRoundedIcon />&nbsp;&nbsp;Home</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/reportupload"><BackupRoundedIcon />&nbsp;&nbsp;Upload Reports</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/booking"><BookRoundedIcon />&nbsp;&nbsp;Book Appointment</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/reportview"><AssignmentRoundedIcon />&nbsp;&nbsp;View Reports</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/login" onClick={() => { Auth.logout() }}><ExitToAppRoundedIcon />&nbsp;&nbsp;Logout</MenuItem>
                </MenuList>
            </Drawer>
        </React.Fragment>
    );
}
