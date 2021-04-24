import React from "react";
import "./navbar.css";
import { Navbar, Nav, Image, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
  return (
    <Navbar fixed="top" variant="dark" expand="md">
      <Navbar.Brand href="/">
        <Image src="/favicon-32x32.png" width="30" height="30" className="d-inline-block align-top" alt="Glazed logo"/>
        {" "}glazed
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/user/login">Login</Nav.Link>
          <Nav.Link href="/user/register">Register</Nav.Link>
          <Form action="/user/logout" method="POST" id="logout-form">
            <Button type="submit" className="link">
              Logout
            </Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
