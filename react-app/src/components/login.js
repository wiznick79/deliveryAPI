import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class LoginForm extends React.Component {
    render() {
        return (            
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Login</h3>
                        <Form action="/login" method="POST">
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" id="email" name="email" placeholder="Your email address" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" id="password" name="password" placeholder="Your password" required />
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary btn-block">Login</Button>
                        </Form>
                    <Form.Text className="text-muted text-right">
                        No account? <a href="/register">Register</a>
                    </Form.Text>
                </div>
            </div>
        );
    }
}