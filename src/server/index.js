import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import App from '../shared/App'
import routes from '../shared/routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer, initialState } from '../shared/redux/reducer';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { JOBS } from './jobs';
import { find } from 'lodash';
import { getHTML } from './markup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

global.navigator = { userAgent: 'all' };

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get('/api/jobs/:slug', (req, res, next) => {
    const slug = req.params.slug;
    const job = find(JOBS.data, { slug });

    res.json(job || {});
});

app.get('/api/jobs', (req, res, next) => {
    res.json(JOBS);
});

app.get("*", (req, res, next) => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware(),
        ),
    );

    global.navigator = { userAgent: req.headers['user-agent'] || 'all' };

    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
    const promise = activeRoute.reduxAction ?
    store.dispatch(activeRoute.reduxAction(req.path)()) :
    Promise.resolve();

    promise.then(() => {
        const state = store.getState().toJS();
        const context = { state };
        const sheet = new ServerStyleSheet();

        const markup = renderToString(
            <StaticRouter location={req.url} context={context}>
                <Provider store={store}>
                    <MuiThemeProvider>
                        <StyleSheetManager sheet={sheet.instance}>
                            <App />
                        </StyleSheetManager>
                    </MuiThemeProvider>
                </Provider>
            </StaticRouter>
        );

        const styleTags = sheet.getStyleTags();

        res.send(getHTML(markup, state, styleTags));
    }).catch(next);

});

app.listen(3333, () => {
    console.log(`Server is listening on port: 3333`)
});
