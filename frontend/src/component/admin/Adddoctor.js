import AdminDrawer from './AdminDrawer';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.default,
    padding: theme.spacing(3),
  }
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


export default function Adddoctor() {
  const classes = useStyles();
  const [form, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'Doctor'
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
      <AdminDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add New Doctor
            </Typography>
            <br />
            <form onSubmit={printValues} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={form.firstName}
                    onChange={updateField}
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
                    autoComplete="lname"
                    value={form.lastName}
                    onChange={updateField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <NativeSelect
                    fullWidth
                    name="category"
                    value={form.category}
                    onChange={updateField}
                    inputProps={{ 'aria-label': 'category' }}
                  >
                    <option value="" disabled>
                      Categories
                      </option>
                    <option value='Cardiologis'>Cardiologist</option>
                    <option value='Neurosurgeon'>Neurosurgeon</option>
                    <option value='Orthopedcian'>Orthopedcian</option>
                    <option value='Neurologist'>Neurologist</option>
                    <option value='Gynecologist'>Gynecologist</option>

                  </NativeSelect>
                  <FormHelperText>Categories</FormHelperText>

                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    value={form.email}
                    onChange={updateField}
                    label="LoginId"
                    name="email"
                    autoComplete="loginId"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    value={form.password}
                    onChange={updateField}
                    label="Password"
                    type="password"
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





