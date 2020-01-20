import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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

export default function Consent() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Link
                component="button"
                variant="body2"
                onClick={handleClickOpen}
            >
                Read our Consent
            </Link>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Our Consent
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <ul>
                            <li>Upon signing the consent of the you grant us the right to request information about your personal data processed by us in accordance with <b>Art. 15</b> GDPR. Specifically, we can attain evidence about the administering purposes, grouping of individual data, beneficiaries to whom your data has been or will be revealed, storage period, survival of a right to alteration, deletion, restriction of processing or opposition, the survival of accuracy to lodge a complaint, origin of your data, unless it was collected by us, survival of mechanized decision-making, including outlining and, if necessary, expressive information about its details.</li>
                            <li>According to <b>Art.16</b> GDPR it instantly appeals the rectification of erroneous or inadequate individual data collected by us.</li>
                            <li>According to <b>Art.17</b> GDPR it requests the deletion of personal data stored by us, except the procedure for applying the right to freedom of representation and information for accomplishing a lawful responsibility for reason of public attention for declaring, training or protecting legal claims is required.</li>
                            <li>According to <b>Art. 18</b> GDPR provided the precision of the data is challenged by you, the processing is prohibited but you refuse to delete it and we no longer need the data, but you need for instituting, training or to uphold it you should have the object to process in accordance with Art.21 GDPR</li>
                            <li>According to <b>Art. 20</b> GDPR to receive your personal data that you have provided to us in coordinated, commonplace and machine-readable format to request the transfer to another person accountable.</li>
                            <li>In order to revoke consent at any given time is in accordance with the <b>Art.7 Para 3</b> of GDPR. As a result, we are no longer allowed to continue processing data based on the consent of the future and to complain to supervisory authority in accordance with <b>Art. 77</b> GDPR</li>
                            <li>You have the right to object the processing of your personal data in accordance with <b>Art.21</b> GDPR provided there are reason for this arising from particular situation or the objection is directed against advertising. In the latter case you have the general right to object which will implement without specifying a situation. If you would like to exercise your right of withdrawal or objection.</li>
                            <li>We take necessary technical and organizational security measures to protect personal data from loss and misuse. In this way your data is stored in a secure operating environment that is not access to the public. In some situation your personal data is encrypted, this means that communication between your computer and our servers takes place using a recognized encryption process if your browser supports TLS.</li>
                        </ul> 







          </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
