import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SlotPicker from "./slotpicker"
import Sidebar from "./sidebar.js";
import './sidebar.css'

export default class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [], slots: [], stores: [] }
    }
    
    componentDidMount() {
        this.getSlots();
        this.getStores();
        this.getUser();
    }

    getUser = () => {
        fetch('/user')
        .then(res => res.json())
        .then(user => this.setState({ user }))
    }
    
    getSlots = () => {
        fetch('/slot')
        .then(res => res.json())
        .then(slots => this.setState({ slots }))
    }

    getStores = () => {
        fetch('/store')
        .then(res => res.json())
        .then(stores => this.setState({ stores }))
    }

    render() {
        const { user, slots, stores } = this.state;

        return (            
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div className="float-left">Welcome, {user.name}</div>
                            <Form>
                                <Form.Group>
                                    <Col>
                                        <Form.Label className="formlabel">Store</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control as="select" defaultValue="">
                                            <option>Choose a store...</option>
                                            {
                                                stores.map((store) => {
                                                    return(<option key={store._id} value={store._id}>{store.name}</option>);
                                                })
                                            }
                                        </Form.Control>
                                    </Col>
                                </Form.Group>                        
                                <Form.Group as={Row}>
                                    <Col>                            
                                        <SlotPicker slots={slots} />                        
                                    </Col>
                                </Form.Group>
                                <Col>
                                    <Button type="submit" variant="dark">Submit</Button>
                                </Col>
                            </Form>                
                    </Col>
                </Row>   
            </Container>            
        );
    }
}
