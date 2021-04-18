import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import Home from "./components/home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/register" component={RegisterForm} />
                </Switch>
            </Router>
        )
    }
}