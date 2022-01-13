import { Button, OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DesktopDatePicker } from '@mui/lab';
import React from 'react';
import './modal-sign-up.styles.scss';
const ModalSignUp = ({ close, open }) => {
  const [value, setValue] = React.useState(null);
  return (
    <div className="modal-sign-up">
      <div className="modal-sign-title">Регистрация</div>
      <span className="modal-sign-text">
        Пожалуйста заполните все пустые поля
      </span>

      <OutlinedInput
        className="modal-sign-input"
        placeholder="Введите код из SMS..."
      />
      <OutlinedInput
        className="modal-sign-input"
        placeholder="Введите код из SMS..."
      />
      <div className="modal-sign-date">
        <LocalizationProvider
          className="modal-sign-date-container"
          dateAdapter={AdapterDateFns}
        >
          <DesktopDatePicker
            className="modal-sign-datepicker"
          
            label="Год рождения"
            value={value}
            minDate={new Date('2003-01-01')}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <OutlinedInput
        className="modal-sign-input"
        placeholder="+998 ( _ _ ) _ _ _ - _ _ - _ _"
      />
      <Button
        className="modal-sign-button-signup"
        onClick={() => {
          close(false);
          open(true);
        }}
        variant="outlined"
      >
        Далее
      </Button>
    </div>
  );
};
export default ModalSignUp;
