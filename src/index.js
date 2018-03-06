import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';

import App from './App';
import AdminIndex from './admin/Index'
import NotFound from './NotFound'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/admin' component={AdminIndex} />
            <Route component={NotFound} />
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
