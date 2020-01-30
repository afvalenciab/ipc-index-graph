import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHistoricalIpcError, getHistoricalIpcList } from '../actions';
import IpcInfo from '../containers/IpcInfo';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';

const RoutesIPC = (props) => {
  const { getHistoricalIpcError, getHistoricalIpcList } = props;
  const historicalIpc = useInitialState();

  if (!historicalIpc.error) {
    if (historicalIpc.data.length > 0) {
      getHistoricalIpcList(historicalIpc.data);
    }
  } else {
    getHistoricalIpcError(historicalIpc.error);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={IpcInfo} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  getHistoricalIpcList,
  getHistoricalIpcError,
};

export default connect(null, mapDispatchToProps)(RoutesIPC);
