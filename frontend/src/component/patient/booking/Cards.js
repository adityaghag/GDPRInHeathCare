import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';

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
});


export default function Cards(props) {
    const [checked, setChecked] = useState(false);
    const [selectedDoc, selectDoc] = useState('');
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const handleHour = (event, hour) => {
        setHour(hour)
        localStorage.setItem('hour', hour)
    }
    const handleDay = (event, day) => {
        setDay(day)
        localStorage.setItem('day', day)
    }
    const handleChange = event => {
        setChecked(event.target.checked);
        selectDoc(event.target.value);
        localStorage.setItem('doctor', event.target.name)
        localStorage.setItem('doctorId', selectedDoc)
    };
    const classes = useStyles();

    return (

        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.userType}
                </Typography>
                <Typography className={classes.pos}>
                    {props.firstName} <span> </span>{props.lastName}
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={5}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Day</FormLabel>
                            <RadioGroup aria-label="availability" name="day" value={day} onChange={handleDay}>
                                <FormControlLabel value="Monday" control={<Radio />} label="Monday" />
                                <FormControlLabel value="Tuesday" control={<Radio />} label="Tuesday" />
                                <FormControlLabel value="Wedensday" control={<Radio />} label="Wedensday" />
                                <FormControlLabel value="Thursday" control={<Radio />} label="Thursday" />
                                <FormControlLabel value="Friday" control={<Radio />} label="Friday" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Hour</FormLabel>
                            <RadioGroup aria-label="availability" name="hour" value={hour} onChange={handleHour}>
                                <FormControlLabel value="9-10" control={<Radio />} label="9-10" />
                                <FormControlLabel value="10-11" control={<Radio />} label="10-11" />
                                <FormControlLabel value="11-12" control={<Radio />} label="11-12" />
                                <FormControlLabel value="13-14" control={<Radio />} label="13-14" />
                                <FormControlLabel value="14-15" control={<Radio />} label="14-15" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <FormControlLabel
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
                />
            </CardActions>
        </Card>
    );
}
