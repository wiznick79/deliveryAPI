import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './sidebar.css'

const Side = props => {
   
    return (
        <>
            <Nav className="col-sm-1 d-none d-md-block sidebar"
            activeKey="/home" 
            >  
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">New</Nav.Link>
                <Nav.Link href="/">Test</Nav.Link>
            </Nav>          
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar