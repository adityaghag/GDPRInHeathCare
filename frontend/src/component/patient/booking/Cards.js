import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
    const [checked, setChecked] = useState(false);
    const [selectedDoc, selectDoc] = useState('');
    const handleChange = event => {
        setChecked(event.target.checked);
        selectDoc(event.target.value);
        localStorage.setItem('doctor', event.target.name)
        localStorage.setItem('doctorId', selectedDoc)
    };
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
                {/* <FormControlLabel
                    control={
                        <Checkbox
                            value={props.id}
                            name={props.lastName}
                            checked={checked}
                            onChange={handleChange}
                            label='doctor'
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    }
                    label="Book an Appointment"
                /> */}
                <Button size="small" color="primary">
                    Book Appointment
                </Button>
            </CardActions>
        </Card>
    );
}