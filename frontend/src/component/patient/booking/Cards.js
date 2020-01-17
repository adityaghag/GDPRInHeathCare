import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 350,
    },
});


export default function Cards(props) {
    const classes = useStyles();

    return (

        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`./static/images/${props.lastName}.png`}
                    title={props.lastName}
                />
            </CardActionArea>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.userType}
                </Typography>
                <Typography className={classes.pos}>
                    {props.firstName} <span> </span>{props.lastName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Book Appointment
                </Button>
            </CardActions>
        </Card>
    );
}