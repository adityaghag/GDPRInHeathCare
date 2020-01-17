import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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


export default function AllReport(props) {
    const classes = useStyles();
    const filePath = '/' + props.documentFile
    return (

        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.fileName}
                </Typography>
                <Typography className={classes.pos}>
                    {props.comments}
                </Typography>
                <a href={"http://localhost:3001" + filePath} target="_blank">Download</a>
                {/* <Link to={filePath} target="_blank" download>Download</Link> */}
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
            </CardActions>
        </Card>
    );
}
