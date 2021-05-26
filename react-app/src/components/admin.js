import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import AdminCreateStore from "./admincreatestore";
import AdminCreateSlot from "./admincreateslot";
import AdminDashboard from "./admindashboard";
import Sidebar from "./sidebar.js";

export default class Admin extends Component {
    render() {
        return (
            <div className="admin-panel-container">
            <Row>
                <Col xs={1} id="sidebar-wrapper">
                    <Sidebar />
                </Col>
                <Col xs={11} id="page-content-wrapper">
                    <Route path="/admin/dashboard" component={AdminDashboard} />
                    <Route path="/admin/createslot" component={AdminCreateSlot} />
                    <Route path="/admin/createstore" component={AdminCreateStore} />
                </Col>
            </Row>
            </div>
        );
    }
}