import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
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


export default function Lab() {
    const classes = useStyles();

    return (

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
            <Divider />
            <MenuList>
                <MenuItem component={Link} to="/stafflogin">Logout</MenuItem>
            </MenuList>
        </Drawer>
    );
}
