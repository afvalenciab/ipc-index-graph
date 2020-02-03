import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUsersListRequest } from '../actions';
import UserItem from './UserItem';
import '../assets/styles/UserControls.scss';

const UserControls = (props) => {
  const { usersList, user, setUsersListRequest } = props;

  useEffect(() => {
    if (user.isAdmin) {
      setUsersListRequest(user);
    }
  }, []);

  return (
    <section className='user--controls'>
      <h2>Administración de Usuarios</h2>
      <div className='user--controls_table'>
        <div className='user--controls_header'>
          <p>Correo electrónico</p>
          <p>Ingresos fallidos</p>
          <p>Admon</p>
          <p>Eliminar</p>
        </div>
        <div className='user--controls_list'>
          {usersList.length > 0 && (
            usersList.map((item) => <UserItem key={item._id} {...item} />)
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    usersList: state.usersList,
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUsersListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserControls);
