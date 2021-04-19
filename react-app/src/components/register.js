import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class RegisterForm extends React.Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Register</h3>
                        <Form action="/register" method="POST">
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" id="name" name="name" placeholder="Your name" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" id="email" name="email" placeholder="Your email address" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" id="password" name="password" placeholder="Enter a password" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" id="password2" name="password2" placeholder="Re-enter your password" required />
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary btn-block">Register</Button>
                        </Form>
                    <Form.Text className="text-muted text-right">
                        Already registered? <a href="/login">Login</a>
                    </Form.Text>                    
                </div>
            </div>
        );
    }
}