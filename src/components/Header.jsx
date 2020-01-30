import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1>
        IPC
        <span>Index</span>
      </h1>
      <nav className='menu'>
        <ul>
          <li>
            <Link to='/'>Administrar</Link>
          </li>
          <li>
            <Link to='/login'>Ingresar</Link>
          </li>
          <li className='menu--register'>
            <Link to='/register'>Crear cuenta</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
