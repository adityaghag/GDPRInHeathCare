import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { DropzoneArea } from 'material-ui-dropzone';
import Patient from './Patient';

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

function uploadFile(file) {
  console.log(file)
  fetch('http://localhost:3001/documents/uploadDocument', {
    method: 'POST',
    heades: {
      "content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    },
    body: file
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );
}

export default function Reportupload() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      < Patient />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Upload your Reports here
      </Typography>
        <DropzoneArea accept="application/msword" dropzoneText="Drag and drop your report here" onChange={uploadFile} showPreviewsInDropzone />
      </main>
    </div>
  );
}
