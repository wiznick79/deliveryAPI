import React from "react";
import "./home.css";
import { Container } from "react-bootstrap";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <div className="home">
          <img src="icon-512x512.png" alt="glazed logo" className="glazed-logo"/>
          <h1>glazed</h1>
        </div>
      </Container>
    );
  }
}
