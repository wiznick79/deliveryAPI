import React from "react";
import { Container, Form, Col, Row, Button, Card } from "react-bootstrap";
import SlotPicker from "./slotpicker"
export default class UserDashboard extends React.Component {
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
            <Container fluid="sm">
                <Row>
                    <Col>
                    <Card className="" border="dark" bg="light" text="dark">
                        <Card.Header><span className="float-left">User Dashboard</span><span className="float-right">{user.name}</span></Card.Header>
                        <Card.Body>
                            <Card.Title>Please, make your choices for your delivery</Card.Title>
                            <Form>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Label className="formlabel">Store</Form.Label>
                                    </Col>
                                    <Col sm={12}>
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
                                    <Col sm={12}>                            
                                        <SlotPicker slots={slots} />                        
                                    </Col>
                                </Form.Group>
                                <Col sm={12}>
                                    <Button type="submit" variant="dark">Submit</Button>
                                </Col>
                            </Form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>   
            </Container>
        );
    }
}