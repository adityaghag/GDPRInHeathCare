import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import Patient from '../Patient';


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

function submitForm(data) {
  console.log("datataaaaa", data)
  fetch("http://localhost:3001/documents/uploadDocument", {
    method: 'POST',
    body: data,
  }).then(res => {
    console.log(res)
  });
}

export default function Reportupload() {
  const classes = useStyles();
  const [form, setState] = useState({
    fileName: '',
    comments: '',
    documentFile: '',
  });

  const uploadDoc = () => {
    // const fileInput = document.querySelector('#your-file-input') ;
    const patientId = localStorage.getItem('userId');
    console.log(".---patientId---", patientId)
    const formData = new FormData();
    formData.append('documentFile', form.documentFile);
    formData.append('fileName', form.fileName)
    formData.append('comments', form.comments)
    formData.append('patientId', patientId)
    // console.log("eeeee", formData)
    submitForm(formData)
  };

  const updateField = e => {
    if (Array.isArray(e)) {
      setState({
        ...form,
        documentFile: e[0]
      });
    } else {
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <div className={classes.root}>
      < Patient />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {/* <Typography paragraph>
          Upload your Reports here
      </Typography>
      <TextField id="filled-basic" label="Filled" variant="filled" />
        <DropzoneArea accept="application/msword" dropzoneText="Drag and drop your report here"
          onChange={uploadDoc} showPreviewsInDropzone /> */}

        <form onSubmit={uploadDoc} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fileName"
                name="fileName"
                variant="outlined"
                required
                fullWidth
                id="fileName"
                value={form.fileName}
                onChange={updateField}
                label="File Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows="4"
                id="comments"
                label="comments"
                name="comments"
                value={form.comments}
                onChange={updateField}
                autoComplete="comments"
              />
            </Grid>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <DropzoneArea accept="application/msword" dropzoneText="Drag and drop your report here"
              value={form.documentFile}
              name="documentFile"
              onChange={updateField} showPreviewsInDropzone />

          </Grid>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
            onClick={uploadDoc}
          >
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
}
