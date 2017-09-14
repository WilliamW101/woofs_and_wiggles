import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';

import Home from './components/Home';
import About from './components/About';
import Client from './components/Client';
import Facility from './components/Facility';
import Head from './components/Head';
import Hour from './components/Hour';
import Locate from './components/Locate'
import NavBar from './components/NavBar';
import Policie from './components/Policie';
import Rate from './components/Rate';
import Service from './components/Service';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path='about' component={About} />
      <Route path="client" component={Client} />
      <Route path="facility" component={Facility} />
      <Route path='head' component={Head} />
      <Route path='hour' component={Hour} />
      <Route path='locate' component={Locate} />
      <Route path='navBar' component={NavBar} />
      <Route path='policie' component={Policie} />
      <Route path='rate' component={Rate} />
      <Route path='service' component={Service} />
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
