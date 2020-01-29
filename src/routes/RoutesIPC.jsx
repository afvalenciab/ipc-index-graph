import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IpcInfo from '../containers/IpcInfo';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';

const RoutesIPC = (props) => {
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

export default RoutesIPC;
