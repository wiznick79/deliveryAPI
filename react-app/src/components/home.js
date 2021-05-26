import React from "react";
import "./home.css";
import { Container } from "react-bootstrap";

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <div className="home">
                    <img
                        src="../logo-180x200.png"
                        alt="logo"
                        className="d-logo"
                    />
                    <h1>Delivery API</h1>
                </div>
            </Container>
        );
    }
}
