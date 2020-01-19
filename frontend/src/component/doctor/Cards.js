import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({

    card: {
        maxWidth: 300,
    },
    title: {
        fontSize: 14,
    }
}));


export default function Cards(props) {
    let day = props.day;


    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    You Have an Appointment on:
                </Typography>
                <Typography variant="h5" component="h2">
                    {day}
                </Typography>
                <Typography variant="caption" display="block" >
                    Room: {Math.ceil(Math.random() * 10)}
                </Typography>
            </CardContent>
        </Card>
    );
}
