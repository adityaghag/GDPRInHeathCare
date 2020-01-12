import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AdminDrawer from './AdminDrawer';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useState } from 'react';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.default,
    padding: theme.spacing(3),
  },
}));


function submitForm(form) {
  fetch("http://localhost:3001/user/signup", {
    method: 'post',
    body: JSON.stringify(form),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    //TODO Kapli please show sucess message after adding new Doctor 
    console.log(res)
  });

  console.log(form)
}


export default function Addlab() {
  const classes = useStyles();

  const [form, setState] = useState({
    email: '',
    password: '',
    userType: 'Lab'
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
    <div className={classes.root}>
      <AdminDrawer></AdminDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add Lab
            </Typography>
            <br />
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="loginId"
                    label="LoginId"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    autoComplete="loginId"
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
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <br></br>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
              >
                save
          </Button>
            </form>
          </div>
        </Container>
      </main>
    </div>
  );
}
