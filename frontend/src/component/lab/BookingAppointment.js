import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LabDrawer from './LabDrawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.default,
        padding: theme.spacing(3),
    },
}));


export default function BookingAppointment() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.root}>
            <LabDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">Book Appointment</Typography>
                        <br />
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="patientID"
                                        label="patientID"
                                        name="patientID"
                                        autoComplete="patientID"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <NativeSelect
                                        fullWidth
                                        name="category"
                                        inputProps={{ 'aria-label': 'category' }}
                                    >
                                        <option value="" disabled>
                                            Categories
                                        </option>
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </NativeSelect>
                                    <FormHelperText>Categories</FormHelperText>
                                </Grid>
                                <Grid item xs={12}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            fullWidth
                                            disableToolbar
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Select Date"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                            <br></br>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color="primary"
                            >save</Button>
                        </form>
                    </div>
                </Container>
            </main>
        </div>
    );
}
