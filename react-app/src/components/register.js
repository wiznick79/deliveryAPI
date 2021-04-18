import React from 'react';

export default class RegisterForm extends React.Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Register</h3>
                        <form action="/register" method="POST">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="name" id="name" name="name" className="form-control" placeholder="Your name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" id="email" name="email" className="form-control" placeholder="Your email address" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="password" name="password" className="form-control" placeholder="Enter a password" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </form>
                    <p className="forgot-password text-right">
                        Already registered? <a href="/login">Login</a>
                    </p>                    
                </div>
            </div>
        );
    }
}