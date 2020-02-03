import React from 'react';
import { connect } from 'react-redux';
import { updateUser, deleteUser } from '../actions';
import '../assets/styles/UserItem.scss';

const UserItem = (props) => {
  const { _id, email, wrongPass, isAdmin, updateUser, user, deleteUser } = props;

  const handleCheckAdmin = (event) => {
    updateUser(user, _id, { isAdmin: event.target.checked });
  };

  const handleClickDelete = () => {
    deleteUser(user, _id);
  };

  return (
    <div className='user--item'>
      <p className='user--item_email'>{email}</p>
      <p className='user--item_wrong'>{wrongPass}</p>
      <input
        type='checkbox'
        name='admin'
        id='admin'
        className='user--item_input'
        checked={isAdmin}
        onChange={handleCheckAdmin}
      />
      <button type='button' onClick={handleClickDelete}>Eliminar</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  updateUser,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
