import 'normalize.css';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App.jsx';

import store from './store';

import './assets/main.css';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
