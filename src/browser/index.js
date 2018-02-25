import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fromJS } from 'immutable';

import App from '../shared/App'
import { reducer } from '../shared/redux/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const store = createStore(
    reducer,
    fromJS(initialState),
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware(),
        ),
    ),
);

hydrate(
  <BrowserRouter>
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);