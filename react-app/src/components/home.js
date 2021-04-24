import React, { Component } from "react";
import "./home.css";
import { Container } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container>      
        <div className="home">
          <img src="icon-512x512.png" alt="glazed logo" className="glazed-logo"></img>
          <h1>glazed</h1>
        </div>
      </Container>
    );
  }
}