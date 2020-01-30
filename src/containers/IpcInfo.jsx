import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import IndexInfo from '../components/IndexInfo';
import IndexGraph from '../components/IndexGraph';
import InitMessage from '../components/InitMessage';
import Footer from '../components/Footer';
import '../assets/styles/IpcInfo.scss';

const IpcInfo = (props) => {
  const { historicalIpcList, user } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <main className='container--ipc'>
      <Header />
      {hasUser ? (
        historicalIpcList.length > 0 && <IndexInfo />
      ) : (
        <hr style={{ border: '0' }} />
      )}

      {hasUser ? (
        historicalIpcList.length > 0 ? <IndexGraph /> : 'Loading...'
      ) : (
        <InitMessage />
      )}
      <Footer />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    historicalIpcList: state.historicalIpcList,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(IpcInfo);
