import React, { Component } from "react";
import "./home.css";
import { Container } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container>      
        <div className="lander">
          <h1>Welcome to Glazed Solutions</h1>
        </div>      
      </Container>
    );
  }
}