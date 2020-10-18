import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../constants/routes.json';
import HomePage from './HomePage';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
