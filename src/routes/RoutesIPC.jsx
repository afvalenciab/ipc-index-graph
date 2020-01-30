import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setHistoricalIpcError, setHistoricalIpcList, setIndicatorsMarketIpc } from '../actions';
import IpcInfo from '../containers/IpcInfo';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';
import getIndicatorsMarketIpc from '../utils/getIndicatorMarketIpc';

const RoutesIPC = (props) => {
  const { setHistoricalIpcError, setHistoricalIpcList, setIndicatorsMarketIpc } = props;
  const historicalIpc = useInitialState();

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
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  setHistoricalIpcList,
  setHistoricalIpcError,
  setIndicatorsMarketIpc,
};

export default connect(null, mapDispatchToProps)(RoutesIPC);
