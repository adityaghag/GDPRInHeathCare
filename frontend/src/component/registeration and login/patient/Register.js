import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Consent from './Consent';
import Terms from './Terms';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: grey[900],
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  labels: {
    marginBottom: '0px'
  }
}));

function submitForm(form, errors) {
  if (!errors.firstName && !errors.lastName && !errors.email && !errors.password) {
    fetch("http://localhost:3001/user/signup", {
      method: 'post',
      body: JSON.stringify(form),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      //TODO : Kapil please redirect the user after the registration.
      console.log(res)
    });
  }
  else {
    //TODO show error message
    console.log('error')
  }

}


export default function Register() {
  const classes = useStyles();

  const [form, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    gender: 'female',
    phonenum: '',
    insurancenum: '',
    password: '',
    terms: false,
    consent: false,
    birthDate: new Date()
  });
  const [errors, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false
  });
  const printValues = e => {
    e.preventDefault();
    submitForm(form, errors)
  };
  const handleCheckBox = (e) => {
    if (e.target.value === 'terms') {
      setState({
        ...form,
        terms: !form.terms
      });

    } else {
      setState({
        ...form,
        consent: !form.consent
      });
    }
  }

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const onBlurVlidation = e => {
    if (e.target.name === 'firstName') {
      if (form.firstName === '') {
        setError({
          ...errors,
          [e.target.name]: true
        });
      }
      else {
        setError({
          ...errors,
          [e.target.name]: false
        });
      }
    }
    else if (e.target.name === 'lastName') {
      if (form.lastName === '') {
        setError({
          ...errors,
          [e.target.name]: true
        });
      }
      else {
        setError({
          ...errors,
          [e.target.name]: false
        });
      }
    }
    else if (e.target.name === 'email') {
      // eslint-disable-next-line 
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isEmail = re.test(String(form.email).toLowerCase())
      if (form.email === '' || !isEmail) {
        setError({
          ...errors,
          [e.target.name]: true
        });
      }
      else {
        setError({
          ...errors,
          [e.target.name]: false
        });
      }
    }
    else {
      if (form.password === '') {
        setError({
          ...errors,
          [e.target.name]: true
        });
      }
      else {
        setError({
          ...errors,
          [e.target.name]: false
        });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form onSubmit={printValues} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                onBlur={onBlurVlidation}
                error={errors.firstName}
                id="firstName"
                value={form.firstName}
                onChange={updateField}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={form.lastName}
                error={errors.lastName}
                onBlur={onBlurVlidation}
                onChange={updateField}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disableFuture
                  openTo="year"
                  required
                  format="dd/MM/yyyy"
                  label="Date of birth"
                  views={["year", "month", "date"]}
                  value={form.birthDate}
                  onChange={updateField}
                  name='birthDate'
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={form.email}
                error={errors.email}
                onBlur={onBlurVlidation}
                onChange={updateField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="insurancenum"
                label="Insurance Number"
                name="insurancenum"
                autoComplete="insurancenum"
                value={form.insurancenum}
                onChange={updateField}
              />
            </Grid>
            <Grid item xs={1}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender" value={form.gender} onChange={updateField} required>
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="primary" />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="phonenum"
                label="Phone Number"
                name="phonenum"
                value={form.phonenum}
                onChange={updateField}
                autoComplete="phonenum"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows="4"
                id="address"
                label="Address"
                name="address"
                value={form.address}
                onChange={updateField}
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={form.password}
                onChange={updateField}
                id="password"
                error={errors.password}
                onBlur={onBlurVlidation}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox checked={form.consent} value="consent" color="primary" />}
                label="Consent"
                checked={form.consent}
                onChange={handleCheckBox}
                className={classes.labels}
              />
              <Consent></Consent>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox checked={form.terms} value="terms" color="primary" />}
                label="Terms & Conditions"
                onChange={handleCheckBox}
                className={classes.labels}
              />
              <Terms></Terms>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
            disabled={!(form.consent && form.terms)}
          >
            Register
          </Button>
          <Grid container justify="flex-start">
            <Grid item>
              Already registered with HSRW,
              <Link to="/login" variant="body2">
                Login here
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container >
  );
}