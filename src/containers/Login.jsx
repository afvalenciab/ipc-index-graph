import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/Login.scss';

const Login = (props) => {
  const { loginUser, user } = props;
  const [form, setForm] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(form);
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      props.history.push('/');
    };
  }, [user]);

  return (
    <main className='container__login'>
      <section className='login'>
        <h2>Inicia sesión</h2>
        <form onSubmit={handleSubmit}>
          <input name='email' type='email' placeholder='Correo' onChange={handleInput} required />
          <input name='password' type='Password' placeholder='Constraseña' onChange={handleInput} required />
          <button type='submit'>Iniciar sesión</button>
        </form>
        <div className='login__social'>
          <a href='/login'>
            Iniciar sesión con Google
          </a>
        </div>
        <div className='login__singup'>
          <p>
            ¿Aún no estás registrado?
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </div>
      </section>
    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
