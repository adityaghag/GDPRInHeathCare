import React, { useEffect, useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Loading from '../../Loading';
import { Context } from '../../../store/Store';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    hr: {
        margin: '0px'
    },
    itemIcon: {
        marginBottom: '0px'
    }
}));


export default function Step2() {
    const [state, dispatch] = useContext(Context);

    const handleChange = (event, newValue) => {
        dispatch({ type: 'SET_DAY', payload: newValue });
        localStorage.setItem('day', newValue)
    };

    const classes = useStyles();

    useEffect(() => {
        const fetchData = () => {
            ['Monday', 'Tuesday', 'Wednesday', 'Thursday'].map(value => {
                let cat = {
                    day: value,
                    docCat: localStorage.getItem('docCat'),
                }
                fetch("http://localhost:3001/user/doctors_by_day", {
                    method: 'post',
                    body: JSON.stringify(cat),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    return response.json();
                }).then(res => {
                    localStorage.setItem(value, res.count);
                    dispatch({ type: 'SET_LOADING', payload: true });
                    return;
                });
                return null;
            });
        }
        fetchData()
        return () => {
            dispatch({ type: 'SET_LOADING', payload: false });
        };
    }, [dispatch]);
    if (state.loading)
        return (
            <Grid container>
                <Grid item xs={12}>
                    <List className={classes.root}>
                        <RadioGroup aria-label="day" name="day" value={state.selectedDay} onChange={handleChange}>
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday'].map(value => {
                                const labelId = `checkbox-list-label-${value}`;
                                return (
                                    <React.Fragment key={value} >
                                        <ListItem role={undefined} dense button >
                                            <ListItemIcon >
                                                <FormControlLabel className={classes.itemIcon} value={value} control={<Radio />} />
                                            </ListItemIcon>
                                            <ListItemText id={labelId} primary={value} />
                                            <Chip label={"Doctors Available: " + localStorage.getItem(value)} icon={<FaceIcon />} color={localStorage.getItem(value) !== '0' ? "primary" : "secondary"} />
                                        </ListItem>
                                        <hr className={classes.hr} />
                                    </React.Fragment>
                                );
                            })}
                        </RadioGroup>
                    </List>
                </Grid>
            </Grid>
        );
    else return <Loading></Loading>
}
