import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

export default class AdminCreateSlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slots: [], startDate: new Date() }
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    handleChange(date) {
        this.setState({
          startDate: date
        })
    }

    componentDidMount() {
        this.getSlots();
    }

    getSlots = () => {
        fetch('/slot')
        .then(res => res.json())
        .then(slots => this.setState({ slots }))
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
    }

    render() {
        const { slots } = this.state;

        const excludedDates = [];
        slots.forEach((slot) => {
            let slotDate = new Date(slot.date);
            excludedDates.push(slotDate);
            console.log(slotDate);
    
        })    
        console.log(excludedDates);

        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <div>
                        <h5>Create new delivery slot:</h5>                   
                    </div>
                </Row>  
                <Row className="justify-content-center">
                    <Form action="/slot/create" method="POST">   
                    <Form.Group>
                        <Form.Label className="formlabel">Capacity</Form.Label>
                        <Form.Control
                            style={{width: 325}}
                            type="text" 
                            defaultValue="5"
                            id="capacity"
                            name="capacity"
                            required
                        >
                        </Form.Control>
                    </Form.Group>                        
                    <Form.Group>                        
                        <Form.Label className="formlabel">Date</Form.Label>
                        <div
                        ><DatePicker 
                            selected={this.state.startDate} 
                            onChange={this.handleChange}
                            minDate={new Date()}
                            timeFormat="HH:mm"
                            showTimeSelect
                            minTime={setHours(setMinutes(new Date(), 30), 8)}
                            maxTime={setHours(setMinutes(new Date(), 0), 22)}  
                            timeCaption="Time"                            
                            dateFormat="dd/MM/yyyy HH:mm"
                            inline        
                        />
                        </div>                        
                    </Form.Group>
                    <input id="date" name="date" type="hidden" value={this.state.startDate}></input>
                    <Row className="justify-content-center">
                        <Button type="submit" variant="dark">Submit</Button>
                    </Row>
                </Form>
                </Row>
            </Container>
        );
    }
}