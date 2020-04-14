import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false,
            regId: null
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.setRegId = this.setRegId.bind(this);
        this.createRegistration = this.props.createRegistration.bind(this);
        this.deleteRegistration = this.props.deleteRegistration.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchEvent(this.props.match.params.eventId)
            .then(() => this.setRegId());
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

    setRegId() {
        let userId = this.props.currentUser.id;
        let registrations = this.props.event.registrations || {};
        // debugger
        if (registrations.hasOwnProperty(userId)) {
            this.setState({ regId: registrations[userId]["id"]});
            this.setState({ registered: true });
        }
    }

    // setRegId() {
    //     let eventId = this.props.event.id;
    //     let registrations = this.props.currentUser.registrations || {};
    //     // debugger
    //     if (registrations.hasOwnProperty(eventId)) {
    //         this.setState({ regId: registrations[eventId]["id"] });
    //         this.setState({ registered: true });
    //     }
    // }

    // handleRegister(e) {
    //     e.preventDefault();
    //     // debugger
    //     if (this.props.currentUser.id) {
    //         if (this.state.registered) {
    //             this.deleteRegistration(this.state.regId);
    //             // debugger
    //             this.setState({ registered: false });
    //         } else {
    //             this.createRegistration({ registration: { event_id: this.props.event.id } })
    //                 .then(({ user }) => this.setState({ regId: user["id"] }));
    //             // debugger
    //             this.setState({ registered: true });
    //         }
    //     } else {
    //         this.props.history.push('/signin/login');
    //     }
    // }
                
    handleRegister(e) {
        e.preventDefault();
        // debugger
        if (this.props.currentUser.id) {
            if (this.state.registered) {
                this.deleteRegistration(this.state.regId);
                // debugger
                this.setState({ registered: false });
            } else {
                this.createRegistration({ registration: {event_id: this.props.event.id } })
                .then(({ event }) => this.setState({ regId: event["id"] } ));
                // debugger
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
        let startMonth = startDate.getUTCMonth();
        if (startMonth === 0) {
            startMonth = 'JAN';
        } else if (startMonth === 1) {
            startMonth = 'FEB';
        } else if (startMonth === 2) {
            startMonth = 'MAR';
        } else if (startMonth === 3) {
            startMonth = 'APR';
        } else if (startMonth === 4) {
            startMonth = 'MAY';
        } else if (startMonth === 5) {
            startMonth = 'JUN';
        } else if (startMonth === 6) {
            startMonth = 'JUL';
        } else if (startMonth === 7) {
            startMonth = 'AUG';
        } else if (startMonth === 8) {
            startMonth = 'SEP';
        } else if (startMonth === 9) {
            startMonth = 'OCT';
        } else if (startMonth === 10) {
            startMonth = 'NOV';
        } else if (startMonth === 11) {
            startMonth = 'DEC';
        }

        let startDateOnly = startDate.getUTCDate();
        if (startDateOnly < 10) {
            startDateOnly = `0${startDateOnly}`
        }

        const endDate = new Date(this.props.event.end_date);
        const endDateString = endDate.toDateString();
        const formatEndTime = new Date(endDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');

        let image = window.defaultURL;

        // fix these later
        if (this.props.event.id === 45) {
            image = window.magiciansURL;
        } else if (this.props.event.id === 46) {
            image = window.excisionURL;
        } else if (this.props.event.id === 47) {
            image = window.hauntedhouseURL;
        } else if (this.props.event.id === 48) {
            image = window.dinnerdateURL;
        } else if (this.props.event.id === 49) {
            image = window.fireworksURL;
        } else if (this.props.event.id === 50) {
            image = window.newyearURL;
        } else if (this.props.event.id === 51) {
            image = window.harrypotterURL;
        } else if (this.props.event.id === 52) {
            image = window.candlelitURL;
        }
        // fix these later

        return (
            <div className="event-show">
                <header className="event-header">
                    <div className="show-image-container">
                        <img id="show-image" src={image} alt={event.title} />
                    </div>
                    <div className="event-details">
                        <div className="start-date-header">
                            <p>{startMonth}</p>
                            <p id="start-date">{startDateOnly}</p>
                        </div>
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
                    <div className="event-body-desc">
                        <h5>About this Event</h5>
                        <p>{event.description}</p>
                    </div>
                    <div className="event-body-date">
                        <h6>Date and Time</h6>
                        <p>{startDateString}, {formatStartTime} -</p>
                        <p>{endDateString}, {formatEndTime}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventShow;