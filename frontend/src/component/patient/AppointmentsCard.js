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
    let age = props.age;
    let gender = props.gender;
    let medicalHistory = props.medicalHistory;


    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    age: {age}
                </Typography>
                <Typography variant="h5" component="h2">
                    gender: {gender}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    medicalHistory: {medicalHistory}
                </Typography>
                <TextField
                    fullWidth
                    id="filled-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="filled"
                />
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary">Save</Button>
            </CardActions>
        </Card>
    );
}
