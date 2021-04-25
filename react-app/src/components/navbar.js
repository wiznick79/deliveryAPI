import React from "react";
import "./navbar.css";
import { Navbar, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import NavbarUser from "./navbarUser"

const Navigation = (props) => {
    return (
        <Navbar fixed="top" variant="dark" expand="md">
            <Navbar.Brand href="/">
                <Image
                    src="/favicon-32x32.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Glazed logo"
                />{" "}
                glazed
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavbarUser />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
