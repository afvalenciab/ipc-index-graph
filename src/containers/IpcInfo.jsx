import React from 'react';
import Header from '../components/Header';
import IndexInfo from '../components/IndexInfo';
import IndexGraph from '../components/IndexGraph';
import Footer from '../components/Footer';
import '../assets/styles/IpcInfo.scss';

const IpcInfo = () => {
  return (
    <main className='container--ipc'>
      <Header />
      <IndexInfo />
      <IndexGraph />
      <Footer />
    </main>
  );
};

export default IpcInfo;
