import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={ () => <Login /> }
      />
      <Route
        exact
        path="/jogar"
        render={ () => <Game /> }
      />
    </Switch>
  );
}
