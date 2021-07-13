import React from "react";
import "./navbar.css";
import { Nav, Form, Button } from "react-bootstrap";
import axios from "axios";

export default class NavbarUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        axios.get("/user")
        .then((res) => {
            const user = res.data;
            this.setState({ user });
        });
    }

    render() {
        const { user } = this.state;

        return (
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {
                    user.name &&
                    <Nav>
                        {
                            (user.role === "admin") &&
                            <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
                        }
                        {
                            (user.role === "user") &&
                            <Nav.Link href="/user/dashboard">Dashboard</Nav.Link>
                        }
                        <Form action="/user/logout" method="POST" id="logout-form">
                        <Button type="submit" className="link">
                            Logout
                        </Button>
                        </Form>
                    </Nav>
                }
                {
                    !user.name &&
                    <Nav>
                        <Nav.Link href="/user/login">Login</Nav.Link>
                        <Nav.Link href="/user/register">Register</Nav.Link>
                    </Nav>
                }
            </Nav>
        );
    }
}