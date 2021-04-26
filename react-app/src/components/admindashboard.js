import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './sidebar.css'

export default class UserDashboard extends React.Component {
    render()  {
        return (            
            <Container>
                <Row>
                    <Col id="page-content-wrapper">
                        Admin Home
                    </Col>
                </Row>   
            </Container>            
        );
    }
}
