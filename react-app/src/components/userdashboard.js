import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [], slots: [], stores: [], startDate: new Date() }
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    handleChange(date) {
        this.setState({
          startDate: date
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
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
    
    render()  {
        const { user, slots, stores } = this.state;
        
        const includedDates = [];
        slots.forEach((slot) => {
            let slotDate = new Date(slot.date);
            includedDates.push(slotDate);
            console.log(slotDate);
    
        })    
        console.log(includedDates);

        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <div>
                        <h4>Welcome, {user.name}</h4>                        
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <div>
                        <p>Please, pick your choices:</p>                   
                    </div>
                </Row>                
                <Row className="justify-content-center">
                    <Form action="/delivery/create" method="POST">
                    <input id="user" name="user" type="hidden" value={user.id}></input>    
                    <Form.Group>
                        <Form.Label className="formlabel">Store</Form.Label>
                        <Form.Control
                            style={{width: 220}}
                            as="select" 
                            defaultValue=""
                            id="store"
                            name="store"
                            required
                        >
                            <option>Choose a store...</option>
                            {
                                stores.map((store) => {
                                    return(<option key={store._id} value={store._id}>{store.name}</option>);
                                })
                            }
                        </Form.Control>
                    </Form.Group>                        
                    <Form.Group>                        
                        <Form.Label className="formlabel">Date</Form.Label>
                        <div
                        ><DatePicker 
                            selected={this.state.startDate} 
                            onChange={this.handleChange}
                            includeDates={includedDates}
                            dateFormat="dd/MM/yyyy"        
                        />
                        </div>
                        <Form.Label className="formlabel pt-3">Time</Form.Label>
                        <div>
                        <DatePicker 
                            selected={this.state.startDate} 
                            onChange={this.handleChange}
                            timeFormat="HH:mm"
                            showTimeSelect
                            showTimeSelectOnly
                            timeCaption="Time"
                            includeTimes={includedDates}
                            dateFormat="HH:mm"        
                        />
                        </div>
                    </Form.Group>
                    <input id="slot" name="slot" type="hidden" value={this.state.startDate}></input>
                    <Button type="submit" variant="dark">Submit</Button>
                </Form>
                </Row>
            </Container>
        );
    }
}