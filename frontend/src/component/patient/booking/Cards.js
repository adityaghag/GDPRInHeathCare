import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DateAndTimePicker from './DateAndTimePicker';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
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
});



export default function Cards(props) {
    const classes = useStyles();
    return (

        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.userType}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.firstName} <span> </span>{props.lastName}
                </Typography>
            </CardContent>
            <CardActions>
                <DateAndTimePicker />
            </CardActions>
        </Card>
    );
}
