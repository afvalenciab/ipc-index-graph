import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/Header.scss';

const Header = (props) => {
  const { user } = props;
  const history = useHistory();
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    const { loginUser } = props;
    loginUser({});
    history.push('/');
  };

  return (
    <header className='header'>
      <Link to='/'>
        <h1>
          IPC
          <span>Index</span>
        </h1>
      </Link>
      <nav className='menu'>
        <ul>
          {hasUser && user.isAdmin && (
            <li>
              <Link to='/management'>Administrar</Link>
            </li>
          )}
          {hasUser ? (
            <li>
              <Link to='#user'>{user.email.split('@')[0]}</Link>
            </li>
          ) : (
            <li>
              <Link to='/login'>Ingresar</Link>
            </li>
          )}

          {hasUser ? (
            <li className='menu--register'>
              <Link to='#user' onClick={handleLogout}>
                Cerrar sesión
              </Link>
            </li>
          ) : (
            <li className='menu--register'>
              <Link to='/register'>Crear cuenta</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
