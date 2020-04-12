import React from 'react';
import { Redirect } from 'react-router-dom';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteEvent(e.currentTarget.value)
            .then(() => this.props.history.push('/'));
    }

    deleteButton() {
        let userId = this.props.currentUser.id;
        let ownerId = this.props.event.owner_id;
        if (userId === ownerId) {
            return (
                <button value={this.props.event.id} onClick={this.handleDelete}>DELETE</button>
            )
        }
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/events/${e.currentTarget.value}/edit`);
    }
        
    editButton() {
        let userId = this.props.currentUser.id;
        let ownerId = this.props.event.owner_id;
        if (userId === ownerId) {
            return (
                <button value={this.props.event.id} onClick={this.handleEdit}>EDIT</button>
            )
        }
    }
                
    handleRegister(e) {
        e.preventDefault();
        if (this.props.currentUser.id) {
            if (this.state.registered) {
                this.props.deleteRegistration(); // find reg id???
                this.setState({ registered: false });
            } else {
                this.props.createRegistration({ registrations: {event_id: this.props.event.id } });
                this.setState({ registered: true });
            }
        } else {
            this.props.history.push('/signin/login');
        }
    }

    registerButton() {
        if (!this.state.registered) {
            return (
                <button onClick={this.handleRegister} id="register">REGISTER</button>
            )
        } else {
            return (
                <button onClick={this.handleRegister} id="register">UNREGISTER</button>
            )
        }
    }


    render() {
        const { event } = this.props;

        const startDate = new Date(this.props.event.start_date);
        const startDateString = startDate.toDateString();
        const formatStartTime = new Date(startDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');

        const endDate = new Date(this.props.event.end_date);
        const endDateString = endDate.toDateString();
        const formatEndTime = new Date(endDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');

        return (
            <div className="event-show">
                <header className="event-header">
                    <img src="#" alt="TEST"/>
                    <div className="event-details">
                        <h1>{event.title}</h1>
                        <p>{event.category}</p>
                    </div>
                </header>
                <div className="buttons">
                    <button id="bookmark"><i className="far fa-bookmark"></i></button>
                    {this.editButton()}
                    {this.deleteButton()}
                    {this.registerButton()}
                </div>
                <div className="event-body">
                    <div>
                        <p>{event.description}</p>
                    </div>
                    <div className="event-body-date">
                        <p>Date and Time</p>
                        <p>{startDateString}, {formatStartTime} -</p>
                        <p>{endDateString}, {formatEndTime}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventShow;