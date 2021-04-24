import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import Home from "./components/home";
import UserDashboard from "./components/userdashboard";
import AdminDashboard from "./components/admindashboard";
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/user/login" component={LoginForm} />
                    <Route path="/user/register" component={RegisterForm} />
                    <Route path="/user/dashboard" component={UserDashboard} />
                    <Route path="/admin/dashboard" component={AdminDashboard} />
                </Switch>
            </Router>
        );
    }
}
