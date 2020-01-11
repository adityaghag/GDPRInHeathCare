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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.default,
        padding: theme.spacing(3),
    },
}));


export default function Doctor() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        HSRW Doctor Dashboard
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
                    <MenuItem component={Link} to="/doctor">Home</MenuItem>
                </MenuList>
                <MenuList>
                    <MenuItem component={Link} to="/patientinfo">Patient Information</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/stafflogin">Logout</MenuItem>
                </MenuList>
            </Drawer>
        </React.Fragment>
    );
}
