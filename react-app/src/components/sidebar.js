import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./sidebar.css";

const Sidebar = (props) => {

    return (
        <>
            <Nav className="col-sm-1 d-none d-md-block sidebar" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/admin/dashboard" className="sidelink mt-4">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/createstore" className="sidelink">Create Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/createslot" className="sidelink">Create Slot</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
        );
  };

  export default withRouter(Sidebar);