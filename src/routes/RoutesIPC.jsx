import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setHistoricalIpcError, setHistoricalIpcList, setIndicatorsMarketIpc } from '../actions';
import IpcInfo from '../containers/IpcInfo';
import Login from '../containers/Login';
import Register from '../containers/Register';
import UserManagement from '../containers/UserManagement';
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';
import getIndicatorsMarketIpc from '../utils/getIndicatorMarketIpc';

const RoutesIPC = (props) => {
  const { setHistoricalIpcError, setHistoricalIpcList, setIndicatorsMarketIpc, user } = props;
  const historicalIpc = useInitialState();

  const isAdmin = Object.keys(user).length > 0 && user.isAdmin;

  if (!historicalIpc.error) {
    if (historicalIpc.data.length > 0) {
      setHistoricalIpcList(historicalIpc.data);
      setIndicatorsMarketIpc(getIndicatorsMarketIpc(historicalIpc.data));
    }
  } else {
    setHistoricalIpcError(historicalIpc.error);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={IpcInfo} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/management' component={isAdmin ? UserManagement : NotFound} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setHistoricalIpcList,
  setHistoricalIpcError,
  setIndicatorsMarketIpc,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesIPC);
