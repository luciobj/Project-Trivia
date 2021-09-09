import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ConfigScreen from './pages/ConfigScreen';
import Login from './pages/Login';
import Game from './pages/Game';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/config" component={ ConfigScreen } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/feedback" component={ Feedback } />
    </Switch>
  );
}
