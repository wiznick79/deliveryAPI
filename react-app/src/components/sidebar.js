import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import './sidebar.css'

const Sidebar = (props) => {
   
    return (
        <>
            <Nav className="col-sm-1 d-none d-md-block sidebar"
            activeKey="/home" 
            >  
                <Nav.Link href="/admin/dashboard">Home</Nav.Link>
                <Nav.Link href="/admin/createstore">Create Store</Nav.Link>
                <Nav.Link href="/admin/createslot">Create Slot</Nav.Link>
            </Nav>          
        </>
        );
  };
  
  export default withRouter(Sidebar);