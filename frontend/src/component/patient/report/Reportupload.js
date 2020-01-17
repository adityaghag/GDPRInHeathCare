import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import Patient from '../Patient';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



export default function Reportupload() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [form, setState] = useState({
    fileName: '',
    comments: '',
    documentFile: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = (data) => {
    console.log("datataaaaa", data)
    fetch("http://localhost:3001/documents/uploadDocument", {
      method: 'POST',
      body: data,
    }).then(res => {
      console.log(res)
    });
  }

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

<<<<<<< HEAD
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
=======
            </Grid>
        <br></br>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          className={classes.submit}
          onClick={handleClickOpen}
        >
          Submit
>>>>>>> 9c5ceebc1aa609bd350749c464f0158921f94c31
          </Button>
        </form>
      </main>
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Upload Success
        </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          All the personal information get redacted from the document and document get uploaded SuccessFully
          </Typography>
      </DialogContent>
    </Dialog>
    </div >
  );
}
