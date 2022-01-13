import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import './modal-profile.styles.scss';
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

export default function CustomizedDialogs({ img = false }) {
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
    <div className="modal-profile-container">
      <div className="modal-profile-card-categories-icon-container">
        <ErrorOutlineIcon
          onClick={handleClickOpen}
          className="modal-profile-card-categories-icon"
        ></ErrorOutlineIcon>
        <span>подробнее</span>
      </div>
      <BootstrapDialog
        className="modal-profile-title"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <div className="modal-profile-content">
          <h2 className="modal-profile-content-title">
            Ваше объявление нарушает правила публикации контента сайта MoyDom
          </h2>
          <p className="modal-profile-content-text">
            Объявление не опубликовано по одной или нескольким нижеследующим
            причинам:
          </p>
          <ul className="modal-profile-content-list">
            <li>
              - в объявлении нет достаточного количества информации об объекте;
            </li>
            <li>- объявление не соответствует тематике площадки MoyDom;</li>
            <li>
              - не допускается публикация сервисов и услуг сторонних компаний;
            </li>
            <li>
              - не допускается публикация строительных компаний и жилых
              комплексов без утвержденного договора на размещение;
            </li>
            <li>
              - объявление не соответствует техническим требованиям сайта;
            </li>
            <li>- воспрещается повторная публикация объявлений.</li>
            <li>
              В случае возникновения вопросов/технических ошибок, просим
              обратиться в службу поддержки. С уважением команда MoyDom.
            </li>
          </ul>
          <Button
            variant="contained"
            onClick={handleClose}
            className="modal-profile-button"
          >
            Спасибо, все понятно!
          </Button>
        </div>
      </BootstrapDialog>
    </div>
  );
}
