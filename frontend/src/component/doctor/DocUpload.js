import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import DoctorDrawer from './DoctorDrawer';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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


export default function DocUpload() {
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
        uploadDoc()
    };

    const submitForm = (data) => {

        // fetch("http://localhost:3001/documents/uploadDocumentbydoc", {
        fetch("http://localhost:3001/documents/addCommentsByDoc", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            // body: data,
        }).then(res => {
            console.log(res)
        });
    }

    const uploadDoc = () => {
        // const docId = localStorage.getItem('reportId');
        // const formData = new FormData();
        // formData.append('documentFile', form.documentFile);
        // formData.append('comments', form.comments)
        // formData.append('docId', docId)
        const data = {
            docId: localStorage.getItem('reportId'),
            comments: form.comments
        }
        submitForm(data)
        // submitForm(formData)
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
            < DoctorDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <form onSubmit={uploadDoc} className={classes.form} noValidate>
                    <Grid container spacing={2}>
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
                    {/* <Grid item xs={12}>
                        <DropzoneArea accept="application/msword" dropzoneText="Drag and drop your report here"
                            value={form.documentFile}
                            name="documentFile"
                            onChange={updateField} showPreviewsInDropzone />

                    </Grid> */}
                    <br></br>
                    <Button
                        fullWidth
                        variant="outlined"
                        className={classes.submit}
                        onClick={handleClickOpen}
                    >
                        Submit
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
