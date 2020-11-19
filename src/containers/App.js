import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../constants/routes.json';
import HomePage from './HomePage';
import PrivacyPolicyPage from './PrivacyPolicy';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.PRIVACY_POLICY} component={PrivacyPolicyPage} />
      </Switch>
    </div>
  );
}

export default App;
