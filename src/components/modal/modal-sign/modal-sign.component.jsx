import { Button, FormControl, OutlinedInput } from '@mui/material';
import React from 'react';
import './modal-sign.styles.scss';
const ModalSign = ({ close, open }) => (
  <div className="modal-sign">
    <div className="modal-sign-title">Регистрация</div>
    <span className="modal-sign-text">
      На ваш номер +998 (90) 654 72 27 был выслан код, введите код для
      подтверждения. Время дейстивия кода 1:00
    </span>

    <OutlinedInput
      className="modal-sign-input"
      placeholder="Введите код из SMS..."
    />
    <Button className="modal-sign-button-again">Отправить снова</Button>
    <Button
      className="modal-sign-button-signup"
      onClick={() => {
        close(false);
        open(true);
      }}
      variant="outlined"
    >
      Регистрация
    </Button>
  </div>
);
export default ModalSign;
