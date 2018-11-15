/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Link = exports.TextSection = exports.Strong = exports.SuplementaryText = exports.Paragraph = exports.SectionHeader = exports.SubContentWrapper = exports.SubTitle = exports.Title = exports.CenteredWrapper = exports.ContentWrapper = exports.NavbarWrapper = exports.Content = exports.Layout = exports.COLORS = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: Roboto, sans-serif;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  color: ', ';\n'], ['\n  font-family: Roboto, sans-serif;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: 1024px;\n  width: 100%;\n'], ['\n  max-width: 1024px;\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100%;\n'], ['\n    width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    margin: 20px 5px;\n'], ['\n    margin: 20px 5px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    flex-flow: column;\n'], ['\n    display: flex;\n    align-items: center;\n    flex-flow: column;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    font-size: 40px;\n    text-transform: capitalize;\n'], ['\n    font-size: 40px;\n    text-transform: capitalize;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    display: block;\n    font-size: 20px;\n    color: ', ';\n '], ['\n    display: block;\n    font-size: 20px;\n    color: ', ';\n ']),
    _templateObject8 = _taggedTemplateLiteral([''], ['']),
    _templateObject9 = _taggedTemplateLiteral(['\n    font-size: 30px;\n    margin: 15px 0;\n '], ['\n    font-size: 30px;\n    margin: 15px 0;\n ']),
    _templateObject10 = _taggedTemplateLiteral(['\n    color: ', ';\n    display: ', ';\n '], ['\n    color: ', ';\n    display: ', ';\n ']),
    _templateObject11 = _taggedTemplateLiteral(['\n    font-size: 15px;\n    color: ', ';\n    display: ', ';\n    margin: ', ';\n'], ['\n    font-size: 15px;\n    color: ', ';\n    display: ', ';\n    margin: ', ';\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n    text-transform: ', ';\n '], ['\n    text-transform: ', ';\n ']),
    _templateObject13 = _taggedTemplateLiteral(['\n    font-size: 20px;\n'], ['\n    font-size: 20px;\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n    text-decoration: none;\n    color: ', ';\n'], ['\n    text-decoration: none;\n    color: ', ';\n']);

var _styledComponents = __webpack_require__(11);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var COLORS = exports.COLORS = {
    black: '#4c4c4c',
    gray: 'rgba(0,0,0,0.54)',
    darkGray: '#676363'
};

/* Only on top component */

var Layout = exports.Layout = _styledComponents2.default.div(_templateObject, COLORS.black);

var Content = exports.Content = _styledComponents2.default.div(_templateObject2);

var NavbarWrapper = exports.NavbarWrapper = _styledComponents2.default.div(_templateObject3);

/* Shared components */

var ContentWrapper = exports.ContentWrapper = _styledComponents2.default.main(_templateObject4);

var CenteredWrapper = exports.CenteredWrapper = _styledComponents2.default.div(_templateObject5);

var Title = exports.Title = _styledComponents2.default.h1(_templateObject6);

var SubTitle = exports.SubTitle = _styledComponents2.default.h3(_templateObject7, COLORS.gray);

var SubContentWrapper = exports.SubContentWrapper = _styledComponents2.default.div(_templateObject8);

var SectionHeader = exports.SectionHeader = _styledComponents2.default.h2(_templateObject9);

var Paragraph = exports.Paragraph = _styledComponents2.default.span(_templateObject10, COLORS.darkGray, function (props) {
    return props.display || 'block';
});

var SuplementaryText = exports.SuplementaryText = _styledComponents2.default.h3(_templateObject11, COLORS.gray, function (props) {
    return props.display || 'block';
}, function (props) {
    return props.margin || 'auto';
});

var Strong = exports.Strong = _styledComponents2.default.strong(_templateObject12, function (props) {
    return props.textTransform || 'none';
});

var TextSection = exports.TextSection = _styledComponents2.default.section(_templateObject13);

var Link = exports.Link = _styledComponents2.default.a(_templateObject14, COLORS.gray);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchJob = exports.fetchJobs = undefined;

var _actionsTypes = __webpack_require__(10);

var _isomorphicFetch = __webpack_require__(27);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchJobs = exports.fetchJobs = function fetchJobs() {
    return function (dispatch) {
        return dispatch({
            type: _actionsTypes.ACTION_TYPES.FETCH_JOBS,
            payload: (0, _isomorphicFetch2.default)('http://localhost:3333/api/jobs').then(function (data) {
                return data.json();
            }).then(function (repos) {
                return repos.data;
            })
        });
    };
};

var fetchJob = exports.fetchJob = function fetchJob(slug) {
    return function (dispatch) {
        return dispatch({
            type: _actionsTypes.ACTION_TYPES.FETCH_JOB,
            payload: (0, _isomorphicFetch2.default)('http://localhost:3333/api/jobs/' + slug).then(function (data) {
                return data.json();
            })
        });
    };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHelmet = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHelmet = exports.getHelmet = function getHelmet(seo) {
    return _react2.default.createElement(_reactHelmet.Helmet, {
        title: seo.title,
        meta: [{ charset: seo.meta.charset }, { name: 'keywords', content: seo.meta.keywords }, { name: 'description', content: seo.description }, { property: 'og:description', content: seo.description }, { property: 'og:title', content: seo.title }, { property: 'og:url', content: seo.canonical }],
        link: [{ property: 'canonical', content: seo.canonical }]
    });
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(19);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(29);

var _Details2 = _interopRequireDefault(_Details);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/',
  exact: true,
  component: _Home2.default,
  reduxAction: function reduxAction() {
    return _actions.fetchJobs;
  }
}, {
  path: '/job/:slug',
  component: _Details2.default,
  reduxAction: function reduxAction() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return _actions.fetchJob.bind(null, path.split('/').pop());
  }
}];

exports.default = routes;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jobStatusSelector = exports.jobDataSelector = exports.jobSelector = exports.jobsStatusSelector = exports.jobsDataSelector = exports.jobsSelector = undefined;

var _reselect = __webpack_require__(26);

var jobsSelector = exports.jobsSelector = function jobsSelector(state) {
    return state.get('JOBS');
};

var jobsDataSelector = exports.jobsDataSelector = (0, _reselect.createSelector)(jobsSelector, function (state) {
    return state.get('DATA');
});

var jobsStatusSelector = exports.jobsStatusSelector = (0, _reselect.createSelector)(jobsSelector, function (state) {
    return state.get('STATUS');
});

var jobSelector = exports.jobSelector = function jobSelector(state) {
    return state.get('JOB');
};

var jobDataSelector = exports.jobDataSelector = (0, _reselect.createSelector)(jobSelector, function (state) {
    return state.get('DATA');
});

var jobStatusSelector = exports.jobStatusSelector = (0, _reselect.createSelector)(jobSelector, function (state) {
    return state.get('STATUS');
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ACTION_TYPES = exports.ACTION_TYPES = {
    FETCH_JOBS: 'FETCH_JOBS',
    FETCH_JOBS_PENDING: 'FETCH_JOBS_PENDING',
    FETCH_JOBS_FULFILLED: 'FETCH_JOBS_FULFILLED',
    FETCH_JOBS_REJECTED: 'FETCH_JOBS_REJECTED',
    FETCH_JOB: 'FETCH_JOB',
    FETCH_JOB_PENDING: 'FETCH_JOB_PENDING',
    FETCH_JOB_FULFILLED: 'FETCH_JOB_FULFILLED',
    FETCH_JOB_REJECTED: 'FETCH_JOB_REJECTED'
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(15);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(16);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(17);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(37);

var _reducer = __webpack_require__(38);

var _reduxPromiseMiddleware = __webpack_require__(13);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reduxThunk = __webpack_require__(41);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _jobs = __webpack_require__(42);

var _lodash = __webpack_require__(3);

var _markup = __webpack_require__(43);

var _MuiThemeProvider = __webpack_require__(45);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _styledComponents = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.navigator = { userAgent: 'all' };

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static("public"));

app.get('/api/jobs/:slug', function (req, res, next) {
    var slug = req.params.slug;
    var job = (0, _lodash.find)(_jobs.JOBS.data, { slug: slug });

    res.json(job || {});
});

app.get('/api/jobs', function (req, res, next) {
    res.json(_jobs.JOBS);
});

app.get("*", function (req, res, next) {
    var store = (0, _redux.createStore)(_reducer.reducer, _reducer.initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxPromiseMiddleware2.default)()));

    global.navigator = { userAgent: req.headers['user-agent'] || 'all' };

    var activeRoute = _routes2.default.find(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    }) || {};
    var promise = activeRoute.reduxAction ? store.dispatch(activeRoute.reduxAction(req.path)()) : Promise.resolve();

    promise.then(function () {
        var state = store.getState().toJS();
        var context = { state: state };
        var sheet = new _styledComponents.ServerStyleSheet();

        var markup = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(
                    _MuiThemeProvider2.default,
                    null,
                    _react2.default.createElement(
                        _styledComponents.StyleSheetManager,
                        { sheet: sheet.instance },
                        _react2.default.createElement(_App2.default, null)
                    )
                )
            )
        ));

        var styleTags = sheet.getStyleTags();

        res.send((0, _markup.getHTML)(markup, state, styleTags));
    }).catch(next);
});

app.listen(3333, function () {
    console.log("Server is listening on port: 3333");
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _Navbar = __webpack_require__(34);

var _NoMatch = __webpack_require__(36);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _styledComponents.Layout,
                null,
                _react2.default.createElement(
                    _styledComponents.NavbarWrapper,
                    null,
                    _react2.default.createElement(_Navbar.Navbar, null)
                ),
                _react2.default.createElement(
                    _styledComponents.Content,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _routes2.default.map(function (_ref) {
                            var path = _ref.path,
                                exact = _ref.exact,
                                Component = _ref.component,
                                rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);

                            return _react2.default.createElement(_reactRouterDom.Route, { key: path, path: path, exact: exact, render: function render(props) {
                                    return _react2.default.createElement(Component, _extends({}, props, rest));
                                } });
                        }),
                        _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
                                return _react2.default.createElement(_NoMatch2.default, props);
                            } })
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(20);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Home2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _List = __webpack_require__(21);

var _Avatar = __webpack_require__(22);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _reactRouterDom = __webpack_require__(1);

var _chevronRight = __webpack_require__(23);

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _domain = __webpack_require__(24);

var _domain2 = _interopRequireDefault(_domain);

var _locationOn = __webpack_require__(25);

var _locationOn2 = _interopRequireDefault(_locationOn);

var _reactRedux = __webpack_require__(4);

var _selectors = __webpack_require__(9);

var _actions = __webpack_require__(5);

var _Welcome = __webpack_require__(28);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _prepareMetadata = __webpack_require__(6);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchAction: function fetchAction() {
            return dispatch((0, _actions.fetchJobs)());
        }
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        jobs: (0, _selectors.jobsDataSelector)(state).toJS(),
        status: (0, _selectors.jobsStatusSelector)(state)
    };
};

var iconDomainStyle = {
    color: 'rgba(0, 0, 0, 0.54)',
    position: 'relative',
    top: '5px'
};

var iconLocationStyle = {
    marginLeft: '5px',
    color: 'rgba(0, 0, 0, 0.54)',
    position: 'relative',
    top: '5px'
};

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (false) {
                if ((0, _lodash.isEmpty)(this.props.jobs)) {
                    this.props.fetchAction();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                jobs = _props.jobs,
                status = _props.status;


            var seo = {
                title: 'Jobs Fabrik | Jobs offers list',
                description: 'Jobs Fabrik - page with the best job offers',
                canonical: 'http://localhost:3333/' + this.props.match.url,
                meta: {
                    charset: 'UTF-8',
                    keywords: 'jobs,jobsfabrik,jobs offers'
                }
            };

            var content = _react2.default.createElement('div', null);
            if (status === 'FULFILLED' && !(0, _lodash.isEmpty)(jobs)) {
                content = _react2.default.createElement(
                    _List.List,
                    null,
                    jobs.map(function (job, index) {
                        return _react2.default.createElement(
                            _reactRouterDom.NavLink,
                            { to: '/job/' + job.slug, style: { textDecoration: 'none' }, key: job.slug },
                            _react2.default.createElement(_List.ListItem, {
                                primaryText: job.title,
                                leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'https://placeimg.com/' + (50 + index) + '/' + (50 + index) + '/animals' }),
                                rightIcon: _react2.default.createElement(_chevronRight2.default, null),
                                secondaryText: _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement(
                                        _styledComponents.Strong,
                                        { textTransform: 'capitalize' },
                                        _react2.default.createElement(_domain2.default, { style: iconDomainStyle }),
                                        ' ',
                                        job.company
                                    ),
                                    _react2.default.createElement(_locationOn2.default, { style: iconLocationStyle }),
                                    job.location
                                )
                            })
                        );
                    })
                );
            } else if (status === 'REJECTED' || (0, _lodash.isEmpty)(jobs)) {
                content = _react2.default.createElement(
                    'label',
                    null,
                    'Sorry there was an error during jobs fetching. Please try again.'
                );
            }

            return _react2.default.createElement(
                _styledComponents.ContentWrapper,
                null,
                (0, _prepareMetadata.getHelmet)(seo),
                _react2.default.createElement(_Welcome2.default, null),
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'span',
                        null,
                        'Click on an offer to see details'
                    ),
                    content
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/chevron-right");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/social/domain");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/communication/location-on");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Welcome = function Welcome() {
    return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
            _styledComponents.Title,
            null,
            'Welcome to Job Fabrik'
        ),
        _react2.default.createElement(
            _styledComponents.SubTitle,
            null,
            'Are you looking for a Frontend or Backend job? Look no further. We have the best offers that you can find in Europe.'
        ),
        _react2.default.createElement(
            _styledComponents.SectionHeader,
            null,
            'Below you can find offers prepared for you'
        )
    );
};

exports.default = Welcome;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Details = __webpack_require__(30);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Details2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _chevronLeft = __webpack_require__(31);

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _reactRouterDom = __webpack_require__(1);

var _RaisedButton = __webpack_require__(7);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactRedux = __webpack_require__(4);

var _selectors = __webpack_require__(9);

var _actions = __webpack_require__(5);

var _OfferDetails = __webpack_require__(32);

var _prepareMetadata = __webpack_require__(6);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchAction: function fetchAction(slug) {
            return dispatch((0, _actions.fetchJob)(slug));
        }
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        job: (0, _selectors.jobDataSelector)(state).toJS(),
        status: (0, _selectors.jobStatusSelector)(state)
    };
};

var Details = function (_Component) {
    _inherits(Details, _Component);

    function Details() {
        _classCallCheck(this, Details);

        return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
    }

    _createClass(Details, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (false) {
                var slug = this.props.match.params.slug;


                if ((0, _lodash.isEmpty)(this.props.job) || this.props.job.slug !== slug) {
                    this.props.fetchAction(slug);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                job = _props.job,
                status = _props.status;


            var seo = {
                title: 'Jobs Fabrik | Job offer details',
                description: 'Detailed information about the job offer',
                canonical: 'http://localhost:3333/' + this.props.match.url,
                meta: {
                    charset: 'UTF-8',
                    keywords: 'jobs,jobsfabrik'
                }
            };

            var content = _react2.default.createElement('div', null);
            if (status === 'FULFILLED' && !(0, _lodash.isEmpty)(job)) {
                seo.title = 'Jobs Fabrik | ' + job.title + ' ' + job.company;
                seo.description += job.title + ' ' + job.company;
                seo.meta.keywords += [job.title, job.company].join(',');

                content = (0, _OfferDetails.OfferDetails)(job);
            } else if (status === 'REJECTED' || (0, _lodash.isEmpty)(job)) {
                content = _react2.default.createElement(
                    'label',
                    null,
                    'Sorry there was an error! Please try again or go back to the home page.'
                );
            }

            return _react2.default.createElement(
                _styledComponents.ContentWrapper,
                null,
                (0, _prepareMetadata.getHelmet)(seo),
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: '/' },
                    _react2.default.createElement(_RaisedButton2.default, { label: 'Back', icon: _react2.default.createElement(_chevronLeft2.default, null) })
                ),
                _react2.default.createElement(
                    _styledComponents.SubContentWrapper,
                    null,
                    content
                )
            );
        }
    }]);

    return Details;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Details);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/chevron-left");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OfferDetails = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(7);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _mailOutline = __webpack_require__(33);

var _mailOutline2 = _interopRequireDefault(_mailOutline);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfferDetails = exports.OfferDetails = function OfferDetails(job) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _styledComponents.Title,
            null,
            job.title
        ),
        _react2.default.createElement(
            _styledComponents.SubTitle,
            null,
            job.location,
            ' - ',
            job.type
        ),
        _react2.default.createElement(
            _styledComponents.SuplementaryText,
            { margin: '10x 0', display: 'block' },
            'Job offer appeared on ',
            job.date
        ),
        _react2.default.createElement(
            _styledComponents.TextSection,
            null,
            _react2.default.createElement(
                'a',
                { href: 'mailto:example@' + job.company + '.com?subject=' + job.title + ' offer' },
                _react2.default.createElement(_RaisedButton2.default, { icon: _react2.default.createElement(_mailOutline2.default, null), label: 'Apply', primary: true })
            ),
            _react2.default.createElement(
                _styledComponents.SectionHeader,
                null,
                'Company details'
            ),
            _react2.default.createElement(
                _styledComponents.Paragraph,
                null,
                _react2.default.createElement(
                    _styledComponents.Strong,
                    null,
                    job.company
                ),
                _react2.default.createElement(
                    _styledComponents.SuplementaryText,
                    { display: 'inline-block', margin: '0 10px' },
                    'Learn more about the company on the website: ',
                    _react2.default.createElement(
                        _styledComponents.Link,
                        { href: '#!', target: '_blank' },
                        'www.',
                        job.company,
                        '.com'
                    )
                )
            ),
            _react2.default.createElement(
                _styledComponents.SectionHeader,
                null,
                'Job brief'
            ),
            _react2.default.createElement(
                _styledComponents.Paragraph,
                null,
                job.brief
            ),
            _react2.default.createElement(
                _styledComponents.SectionHeader,
                null,
                'Responsibilities'
            ),
            _react2.default.createElement(
                _styledComponents.Paragraph,
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    job.responsibilities.map(function (r, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: index },
                            r
                        );
                    })
                )
            ),
            _react2.default.createElement(
                _styledComponents.SectionHeader,
                null,
                'Requirements'
            ),
            _react2.default.createElement(
                _styledComponents.Paragraph,
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    job.requirements.map(function (r, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: index },
                            r
                        );
                    })
                )
            )
        )
    );
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/communication/mail-outline");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Navbar = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _AppBar = __webpack_require__(35);

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkStyle = {
    textDecoration: 'none',
    color: 'white'
};

var Navbar = exports.Navbar = function Navbar(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AppBar2.default, {
            title: _react2.default.createElement(
                _reactRouterDom.NavLink,
                { style: linkStyle, to: '/' },
                'Job Fabrik'
            ),
            iconElementLeft: _react2.default.createElement('div', null)
        })
    );
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NoMatch;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _RaisedButton = __webpack_require__(7);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _styledComponents = __webpack_require__(2);

var _prepareMetadata = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoMatch() {
    var seo = {
        title: 'Jobs Fabrik | Page not found',
        description: 'Jobs Fabrik - page not found',
        meta: {
            charset: 'UTF-8',
            keywords: 'jobs,jobsfabrik'
        }
    };

    return _react2.default.createElement(
        _styledComponents.CenteredWrapper,
        null,
        (0, _prepareMetadata.getHelmet)(seo),
        _react2.default.createElement(
            _styledComponents.Title,
            null,
            '404'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Sorry, this url is not pointing anywhere'
        ),
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/' },
            _react2.default.createElement(_RaisedButton2.default, { label: 'Go back to homepage' })
        )
    );
}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducer = exports.initialState = exports.STATE_CONSTS = undefined;

var _STATE_CONSTS$JOBS, _STATE_CONSTS$JOB, _fromJS;

var _statuses = __webpack_require__(39);

var _immutable = __webpack_require__(40);

var _actionsTypes = __webpack_require__(10);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STATE_CONSTS = exports.STATE_CONSTS = {
    JOBS: 'JOBS',
    JOB: 'JOB',
    STATUS: 'STATUS',
    DATA: 'DATA'
};

var initialState = exports.initialState = (0, _immutable.fromJS)((_fromJS = {}, _defineProperty(_fromJS, STATE_CONSTS.JOBS, (_STATE_CONSTS$JOBS = {}, _defineProperty(_STATE_CONSTS$JOBS, STATE_CONSTS.STATUS, _statuses.REQUEST_STATUS.NOT_FETCHED), _defineProperty(_STATE_CONSTS$JOBS, STATE_CONSTS.DATA, []), _STATE_CONSTS$JOBS)), _defineProperty(_fromJS, STATE_CONSTS.JOB, (_STATE_CONSTS$JOB = {}, _defineProperty(_STATE_CONSTS$JOB, STATE_CONSTS.STATUS, _statuses.REQUEST_STATUS.NOT_FETCHED), _defineProperty(_STATE_CONSTS$JOB, STATE_CONSTS.DATA, {}), _STATE_CONSTS$JOB)), _fromJS));

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var JOBS = STATE_CONSTS.JOBS,
        JOB = STATE_CONSTS.JOB,
        DATA = STATE_CONSTS.DATA,
        STATUS = STATE_CONSTS.STATUS;
    var FULFILLED = _statuses.REQUEST_STATUS.FULFILLED,
        PENDING = _statuses.REQUEST_STATUS.PENDING,
        REJECTED = _statuses.REQUEST_STATUS.REJECTED;


    var successState = void 0,
        failureState = void 0;

    switch (action.type) {
        case _actionsTypes.ACTION_TYPES.FETCH_JOBS_PENDING:
            return state.setIn([JOBS, STATUS], PENDING);

        case _actionsTypes.ACTION_TYPES.FETCH_JOBS_FULFILLED:
            successState = state.setIn([JOBS, STATUS], FULFILLED);
            return successState.setIn([JOBS, DATA], (0, _immutable.fromJS)(action.payload));

        case _actionsTypes.ACTION_TYPES.FETCH_JOBS_REJECTED:
            failureState = state.setIn([JOBS, STATUS], REJECTED);
            return failureState.setIn([JOBS, DATA], (0, _immutable.fromJS)(action.payload));

        case _actionsTypes.ACTION_TYPES.FETCH_JOB_PENDING:
            return state.setIn([JOB, STATUS], PENDING);

        case _actionsTypes.ACTION_TYPES.FETCH_JOB_FULFILLED:
            successState = state.setIn([JOB, STATUS], FULFILLED);
            return successState.setIn([JOB, DATA], (0, _immutable.fromJS)(action.payload));

        case _actionsTypes.ACTION_TYPES.FETCH_JOB_REJECTED:
            failureState = state.setIn([JOB, STATUS], REJECTED);
            return failureState.setIn([JOB, DATA], (0, _immutable.fromJS)(action.payload));

        default:
            return state;
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.REQUEST_STATUS = undefined;

var _reduxPromiseMiddleware = __webpack_require__(13);

var REQUEST_STATUS = exports.REQUEST_STATUS = {
    NOT_FETCHED: 'NOT_FETCHED',
    PENDING: _reduxPromiseMiddleware.PENDING,
    FULFILLED: _reduxPromiseMiddleware.FULFILLED,
    REJECTED: _reduxPromiseMiddleware.REJECTED
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var description = {
    brief: 'We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.',
    responsibilities: ['Use markup languages like HTML to create user-friendly web pages.', 'Maintain and improve website', 'Optimize applications for maximum speed', 'Design mobile-based features'],
    requirements: ["Proven work experience as a Front-end developer", "Hands on experience with markup languages", "Experience with JavaScript, CSS and jQuery", "Familiarity with browser testing and debugging"],
    type: 'Full Time'
};

var JOBS = exports.JOBS = { data: [_extends({ id: 0, slug: 'superoid-senior-frontend-developer' }, description, { title: 'Senior Frontend Developer', company: 'superoid', date: '12.20.2017', location: 'Berlin, Germany' }), _extends({ id: 1, slug: 'bioyo-frontend-developer' }, description, { title: 'Frontend Developer', company: 'bioyo', date: '12.01.2018', location: 'Munich, Germany' }), _extends({ id: 2, slug: 'octonu-frontend-engineer' }, description, { title: 'Frontend Engineer', company: 'octonu', date: '30.01.2018', location: 'Hamburg, Germany' }), _extends({ id: 3, slug: 'forill-junior-frontend-engineer' }, description, { title: 'Junior Frontend Engineer', company: 'forill', date: '01.02.2018', location: 'Cologne, Germany' }), _extends({ id: 4, slug: 'avanoodle-javascript-engineer' }, description, { title: 'Javascript Engineer', company: 'avanoodle', date: '10.02.2018', location: 'Berlin, Germany' })] };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHTML = undefined;

var _serializeJavascript = __webpack_require__(44);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHTML = exports.getHTML = function getHTML(markup, initialState, styleTags) {
    var helmet = _reactHelmet.Helmet.renderStatic();

    return "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n            <head>\n                <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">            \n                " + helmet.title.toString() + "\n                " + helmet.meta.toString() + "\n                " + helmet.link.toString() + "\n            \n                <script src=\"/client.js\" defer></script>\n                <script>\n                    window.__INITIAL_STATE__ = " + (0, _serializeJavascript2.default)(initialState) + "\n                </script>\n                \n                " + styleTags + "\n            </head>\n\n            <body>\n                <div id=\"app\">" + markup + "</div>\n            </body>\n        </html>\n    ";
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ })
/******/ ]);