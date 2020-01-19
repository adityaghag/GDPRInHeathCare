import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Context } from '../../store/Store';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));


export default function AppointmentsCard(props) {
    const [, dispatch] = useContext(Context);
    let day = props.day;
    let cat = props.cat;
    let firstName = props.firstName;
    let lastName = props.lastName;

    const fetchData = async () => {
        const appointmentId = {
            appointmentId: props.id
        }
        const res = await fetch("http://localhost:3001/appointments/deleteAppointment", {
            method: 'post',
            body: JSON.stringify(appointmentId),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        res.json().then(res => {
            dispatch({ type: 'SET_RELOAD' });
        })
    }
    const handleClick = () => {
        fetchData()
    }

    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    You have an Appointment on: {day}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Your Appointmen by Dr. {lastName}, {firstName}.
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                    Appointment Category: {cat}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="secondary" onClick={handleClick}>Cancel Appointment</Button>
            </CardActions>
        </Card>
    );
}
