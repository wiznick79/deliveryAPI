import React from "react";
import { Container } from "react-bootstrap";

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
            <Container>
                <h3>User Dashboard</h3> 
                <div>Welcome, {user.name}</div>
                <h4>Available slots: </h4>
                {slots.length ? (
                    <div>
                        {slots.map((slot) => {
                            return(<li key={slot._id}>{slot.date}</li>);
                        })}
                    </div>
                ) : (
                    <div>No available slots found</div>
                )}
                <h4>Available stores: </h4>
                {stores.length ? (
                    <div>
                        {stores.map((store) => {
                            return(<li key={store._id}>{store.name}</li>);
                        })}
                    </div>
                ) : (
                    <div>No available stores found</div>
                )}
            </Container>
        );
    }
}
