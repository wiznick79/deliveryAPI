import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (            
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Login</h3>
                        <form action="/login" method="POST">
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" id="email" name="email" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="password" name="password" className="form-control" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </form>
                    <p className="forgot-password text-right">
                        No account? <a href="/register">Register</a>
                    </p>
                </div>
            </div>
        );
    }
}