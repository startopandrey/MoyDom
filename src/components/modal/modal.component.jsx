import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import './modal.styles.scss';
import ModalSign from './modal-sign/modal-sign.component';
import ModalSignUp from './modal-sign-up/modal-sign-up.component';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },

  '& .MuiDialog-paper': {
    maxWidth: '100%',
    borderRadius: '16px',
  },
}));

const BootstrapDialogTitle = props => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#019cde',
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ img=false }) {
  const [open, setOpen] = React.useState(false);
  const [registration, setRegistration] = React.useState(true);
  const [sign, setSign] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal-container">
      <Button
        variant="contained"
        className="modal-button-open"
        onClick={handleClickOpen}
      >
        Авторизация
      </Button>
      <BootstrapDialog
        className="modal-title"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <div className="modal-content">
          {registration && (
            <img className="modal-content-img" src={img?.registration} alt="" />
          )}
          {sign && <img className="modal-content-img" src={img?.sign} alt="" />}
          <div className="modal-data">
            {registration && (
              <ModalSign close={setRegistration} open={setSign}></ModalSign>
            )}
            {sign && (
              <ModalSignUp close={setRegistration} open={setSign}></ModalSignUp>
            )}
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}
