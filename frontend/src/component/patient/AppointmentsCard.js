import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({

    card: {
        maxWidth: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));


export default function AppointmentsCard(props) {
    let day = props.day;
    let cat = props.cat;
    let firstName = props.firstName;
    let lastName = props.lastName;



    const classes = useStyles();

    return (
        <Card className={classes.card}>
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

            </CardActions>
        </Card>
    );
}
