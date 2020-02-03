import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/InitMessage.scss';

const InitMessage = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/login');
  };

  return (
    <section className='init__container'>
      <p className='init__description'>
        El Índice de Precios y Cotizaciones
        <span> (IPC) </span>
        es el indicador oficial de la
        evolución del mercado accionario, ya que busca medir el rendimiento de
        las acciones de mayor tamaño y liquidez listadas en la Bolsa Mexicana de
        Valores.
      </p>
      <p className='init__invitation'>Ingresa y conoce el comportamiento del índice</p>
      <button type='button' onClick={handleClick}>Ingresar</button>
    </section>
  );
};

export default InitMessage;
