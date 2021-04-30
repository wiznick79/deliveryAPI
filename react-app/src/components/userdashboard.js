import React from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [], slots: [], stores: [], selectedDate: new Date() }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDateChange(date) {
        this.setState({
          selectedDate: date
        });
        this.getSlots();
    }

    handleStoreChange(e) {
        this.setState({
            store: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = this.state.user.id;
        const store = this.state.store;
        const slot = this.state.selectedDate;
        
        axios.post("/delivery/create", { user, store, slot })
            .then(res => {
                toast(res.data.message, {
                    type: res.data.type,
                    position: "bottom-center",
                    autoClose: 5000,
                });
            })
            .catch(error => {
                console.log(error);
            });            
        this.getSlots();
    }

    componentDidMount() {
        this.getSlots();
        this.getStores();
        this.getUser();
    }

    getUser = () => {
        axios.get("/user")        
        .then(res => {
            const user = res.data;
            this.setState({ user });
        });
    }
    
    getSlots = () => {
        axios.get("/slot")
        .then(res => {
            const slots = res.data;
            this.setState({ slots });
        });
    }

    getStores = () => {
        axios.get("/store")
        .then(res => {
            const stores = res.data;    
            this.setState({ stores });
        });
    }
    
    render()  {
        const { user, slots, stores } = this.state;
        
        const includedDates = [];
        slots.map((slot) => {
            let slotDate = new Date(slot.date);
            includedDates.push(slotDate);
            return includedDates;
        });

        const includedTimes = [];
        const selDate = this.state.selectedDate;
        includedDates.forEach((date) => {
            if (selDate.getDate() === date.getDate() &&
                selDate.getMonth() === date.getMonth() &&
                selDate.getFullYear() === date.getFullYear()) {
                    let slotTime = new Date(date);
                    includedTimes.push(slotTime);
                }
        });

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
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label className="formlabel">Store</Form.Label>
                        <Form.Control
                            style={{width: 325}}
                            as="select"
                            defaultValue=""
                            id="store"
                            name="store"
                            onChange={this.handleStoreChange}
                            required
                        >
                            <option value="">Choose a store...</option>
                            {
                                stores.map((store) => {
                                    return(<option key={store._id} value={store._id}>{store.name}</option>);
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="formlabel">Date</Form.Label>
                        <div>
                        <DatePicker 
                            selected={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            includeDates={includedDates}
                            timeFormat="HH:mm"
                            showTimeSelect
                            timeCaption="Time"
                            includeTimes={includedTimes}
                            dateFormat="dd/MM/yyyy HH:mm"
                            inline
                        />
                        </div>
                    </Form.Group>
                    <Row className="justify-content-center">
                        <Button type="submit" variant="dark">Submit</Button>
                    </Row>
                </Form>
                <ToastContainer 
                    transition={Slide}
                    pauseOnFocusLoss={false}
                    hideProgressBar={false}
                    closeOnClick={true}
                    pauseOnHover={true}
                    draggable={true}
                    progress={undefined}
                />
                </Row>
            </Container>
        );
    }
}