import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./sidebar.css";
import "./home.css";

export default class UserDashboard extends React.Component {
    render()  {
        return (
            <Container>
                <Row>
                    <Col id="page-content-wrapper">
                        <div className="home">
                            <img
                                src="../logo-180x200.png"
                                alt="logo"
                                className="d-logo"
                            />
                            <h1>Delivery API</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
