import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { DropzoneArea } from 'material-ui-dropzone';
import Patient from './Patient';


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
  const uploadDoc = e => {
    console.log(".------", e[0])
    // const fileInput = document.querySelector('#your-file-input') ;
    const patientId = localStorage.getItem('userId');
    console.log(".---patientId---", patientId)

    const formData = new FormData();
    formData.append('documentFile', e[0]);
    formData.append('fileName', 'First')
    formData.append('comments', 'asdada')
    formData.append('patientId', patientId)
    console.log("eeeee", formData)
    submitForm(formData)
  };

  return (
    <div className={classes.root}>
      < Patient />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Upload your Reports here
      </Typography>
        <DropzoneArea accept="application/msword" dropzoneText="Drag and drop your report here"
          onChange={uploadDoc} showPreviewsInDropzone />
      </main>
    </div>
  );
}
