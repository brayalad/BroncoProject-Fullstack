import { Switch, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './components/HomePage';
import InfoPage from './components/InfoPage';
import LogInPage from './components/UserRegAndLog/LogInPage';
import RegisterPage from './components/UserRegAndLog/RegisterPage';
import ClubsPage from './components/ClubsPage';
import OrgPage from './components/OrgPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/info" component={InfoPage} />
      <Route path="/login" component={LogInPage} />
      <Route path="/register" component={RegisterPage} />
      <Route exact path="/organizations" component={ClubsPage} />
      <Route exact path="/organizations/CSS" component={OrgPage} />
    </Switch>
  </main>
);

export default Main;