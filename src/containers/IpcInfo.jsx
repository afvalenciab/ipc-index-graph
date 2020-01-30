import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import IndexInfo from '../components/IndexInfo';
import IndexGraph from '../components/IndexGraph';
import Footer from '../components/Footer';
import '../assets/styles/IpcInfo.scss';

const IpcInfo = (props) => {
  const { historicalIpcList } = props;

  return (
    <main className='container--ipc'>
      <Header />
      {historicalIpcList.length > 0 && <IndexInfo />}
      {historicalIpcList.length > 0 ? <IndexGraph /> : 'Loading...'}
      <Footer />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    historicalIpcList: state.historicalIpcList,
  };
};

export default connect(mapStateToProps, null)(IpcInfo);
