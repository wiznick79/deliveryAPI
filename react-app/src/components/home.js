import React, { Component } from "react";
import "./home.css";
import { Container } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container>      
        <div className="lander">
          <img src="icon-512x512.png" alt="glazed logo" class="glazed-logo"></img>
          <h1>glazed</h1>
        </div>
      </Container>
    );
  }
}