import React from 'react';
import Header from '../components/Header';
import UserControls from '../components/UserControls';
import Footer from '../components/Footer';
import '../assets/styles/UserManagement.scss';

const UserManagement = () => {
  return (
    <main className='container--management'>
      <Header />
      <UserControls />
      <Footer />
    </main>
  );
};

export default UserManagement;
