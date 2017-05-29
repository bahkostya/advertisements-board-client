import 'normalize.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import App from './components/App.jsx';

import store from './store';

import './assets/main.css';

const routes = (
    <Switch>
        <Route component={App} exact path="/" />
    </Switch>
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            {routes}
        </HashRouter>
    </Provider>,
    document.getElementById('root'),
);
