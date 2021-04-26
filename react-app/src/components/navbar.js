import React from "react";
import { Navbar, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./navbar.css";
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
            <Navbar.Toggle aria-controls="top-navbar" />
            <Navbar.Collapse id="top-navbar">
                <NavbarUser />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
