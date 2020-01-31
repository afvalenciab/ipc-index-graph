import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions/index';
import '../assets/styles/Register.scss';

const Register = (props) => {
  const { registerUser, user } = props;
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
    registerUser(form);
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      props.history.push('/');
    };
  }, [user]);

  return (
    <main className='container__register'>
      <section className='register'>
        <h2>Crea tu registro</h2>
        <form onSubmit={handleSubmit}>
          <input name='email' type='email' placeholder='Correo' onChange={handleInput} required />
          <input name='password' type='Password' placeholder='Constraseña' onChange={handleInput} required />
          <button type='submit'>Registrarme</button>
        </form>
        <div className='register__social'>
          <a href='/register'>
            Registrarme con Google
          </a>
        </div>
        <div className='register__login'>
          <p>
            ¿Ya estás registrado?
            <Link to='/login'>
              Inicia sesión
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
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
