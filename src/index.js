import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './containers/layout';
import Home from 'containers/home';
import First from 'containers/first';
import Test from 'containers/test';
import 'styles/index.scss';

const routes = (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="index" component={First} />
    </Route>
    <Route path="test" component={Test} />
  </Route>
);

// Render the main component into the dom
ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('app'));
