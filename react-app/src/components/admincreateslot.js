import React from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default class AdminCreateSlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slots: [], selectedDate: new Date() }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDateChange(date) {
        this.setState({
          selectedDate: date
        })
    }

    handleChange(e) {
        this.setState({
            capacity: e.target.value
        })
    }

    componentDidMount() {
        this.getSlots();
    }

    getSlots = () => {
        axios.get("/slot")
        .then(res => {
            const slots = res.data;
            this.setState({ slots });
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const date = this.state.selectedDate;
        const capacity = this.state.capacity;
        
        axios.post("/slot/create", { date, capacity })
            .then(res => {
                toast(res.data.message, {
                    type: res.data.type,
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { slots } = this.state;

        const excludedDates = [];
        slots.forEach((slot) => {
            let slotDate = new Date(slot.date);
            excludedDates.push(slotDate);                
        })    
        
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <div>
                        <h5>Create new delivery slot:</h5>                   
                    </div>
                </Row>  
                <Row className="justify-content-center">
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label className="formlabel">Capacity</Form.Label>
                        <Form.Control
                            style={{width: 325}}
                            type="text" 
                            defaultValue="5"
                            id="capacity"
                            name="capacity"
                            onChange={this.handleChange}
                            required
                        >
                        </Form.Control>
                    </Form.Group>                        
                    <Form.Group>                        
                        <Form.Label className="formlabel">Date</Form.Label>
                        <div
                        ><DatePicker 
                            selected={this.state.selectedDate} 
                            onChange={this.handleDateChange}
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
                    <Row className="justify-content-center">
                        <Button type="submit" variant="dark">Submit</Button>
                    </Row>
                </Form>
                <ToastContainer transition={Slide}/>
                </Row>
            </Container>
        );
    }
}
