import React from "react";
import { Container } from "react-bootstrap";
import "./home.css";

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
