import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';
import { useState } from 'react';
import { Redirect } from 'react-router-dom'
import Auth from '../auth';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1505587043598-a6da2ee1da2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? grey[900] : grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: grey[900],
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [redirectto, setRedirectTo] = useState('');
  const [form, setState] = useState({
    email: '',
    password: ''
  });

  const login = e => {
    e.preventDefault();
    fetch("http://localhost:3001/user/login", {
      method: 'post',
      body: JSON.stringify(form),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(res => {
      localStorage.setItem('userId', res.userId)
      localStorage.setItem('token', res.token)
      if (res.token) {
        Auth.login()
        if (res.userType === 'Patient')
          setRedirectTo('/patient')
        else if (res.userType === 'Doctor')
          setRedirectTo('/doctor')
        else if (res.userType === 'Admin')
          setRedirectTo('/admin')
        else if (res.userType === 'Lab')
          setRedirectTo('/lab')
        localStorage.setItem('token', res.token)
        setRedirect(true)
      }
    });
  };

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  if (redirect) {
    return < Redirect to={redirectto} />;
  }
  else {
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
          </Typography>
            <form onSubmit={login} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="loginId"
                label="Login ID"
                name="email"
                autoComplete="loginid"
                value={form.email}
                onChange={updateField}
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
              <Grid container>

                <Grid item>
                  Not registered with the hospital ?, <Link to="/register">Register here</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}