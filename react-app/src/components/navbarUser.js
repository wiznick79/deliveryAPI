import React from "react";
import "./navbar.css";
import { Nav, Form, Button } from "react-bootstrap";

export default class NavbarUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [] }
    }
    
    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        fetch('/user')
        .then(res => res.json())
        .then(user => this.setState({ user }))
    }
    
    render() {
        const { user } = this.state;

        if (user.name) {
            return (
                <Nav className="ml-auto">                
                    <Nav.Link href="/">Home</Nav.Link>
                    <Form action="/user/logout" method="POST" id="logout-form">
                        <Button type="submit" className="link">
                            Logout
                        </Button>
                    </Form>
                </Nav>
            )
        }        
        else return (            
            <Nav className="ml-auto">                
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/user/login">Login</Nav.Link>
                <Nav.Link href="/user/register">Register</Nav.Link>
            </Nav>
        );
    }
}