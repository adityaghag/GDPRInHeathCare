import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import grey from '@material-ui/core/colors/grey';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function submitForm(form) {
  fetch("http://localhost:3001/user/login", {
    method: 'post',
    body: JSON.stringify(form),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(res => console.log(res));
}

export default function Stafflogin() {
  const classes = useStyles();

  const [form, setState] = useState({
    email: '',
    password: ''
  });

  const printValues = e => {
    e.preventDefault();
    submitForm(form)
  };

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          HSRW Login
        </Typography>
        <form className={classes.form} noValidate>
        <Grid item xs={8}>
        <InputLabel id="label">Role</InputLabel>
        <Select labelId="label" id="select" value="Admin">
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Doctor">Doctor</MenuItem>
            <MenuItem value="Lab">Lab</MenuItem>
        </Select>
        </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="loginid"
            label="Login ID"
            name="email"
            value={form.email}
            onChange={updateField}
            autoComplete="loginid"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={form.password}
            onChange={updateField}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}