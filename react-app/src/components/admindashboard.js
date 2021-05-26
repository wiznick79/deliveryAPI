import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './sidebar.css'
import './home.css'

export default class UserDashboard extends React.Component {
    render()  {
        return (
            <Container>
                <Row>
                    <Col id="page-content-wrapper">
                        <div className="home">
                            <img
                                src="../icon-512x512.png"
                                alt="glazed logo"
                                className="glazed-logo"
                            />
                            <h1>glazed</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
