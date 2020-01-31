import React from 'react';
import '../assets/styles/MessageError.scss';
import imgError from '../assets/static/error.svg';

const MessageError = () => {
  return (
    <div className='form__message-error'>
      <figure>
        <img src={imgError} alt='Error Message Login' />
      </figure>
      <p>Usuario/Contraseña invalido! </p>
    </div>
  );
};

export default MessageError;
