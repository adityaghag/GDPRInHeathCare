import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { Context } from '../../../store/Store';
import { useHistory } from "react-router-dom";

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
    let history = useHistory();
    const [state, dispatch] = useContext(Context);
    const classes = useStyles();
    const fetchData = async () => {
        let app = {
            patientId: localStorage.getItem('userId'),
            doctorId: props.id,
            categories: state.selectedCat,
            date: new Date(),
            time: new Date(),
            day: state.selectedDay
        }
        const res = await fetch("http://localhost:3001/appointments/setAppointmentDetails", {
            method: 'post',
            body: JSON.stringify(app),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        res.json().then(res => {
            dispatch({ type: 'SET_SNACK', payload: true });
            dispatch({ type: 'SET_RELOAD' });
            setTimeout(() => {
                history.push('/patient')
            }, 1000);
        });
    }
    const handleClick = () => {
        fetchData()
    }
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
                <Button size="small" color="primary" onClick={handleClick}>
                    Book Appointment
                </Button>
            </CardActions>
        </Card>
    );
}