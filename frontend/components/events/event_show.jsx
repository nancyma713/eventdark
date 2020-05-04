import React from 'react';
import EventIndexItem from './event_index_item';

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
        this.handleBookmark = this.handleBookmark.bind(this);
        this.setRegId = this.setRegId.bind(this);
        this.createRegistration = this.props.createRegistration.bind(this);
        this.deleteRegistration = this.props.deleteRegistration.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId)
            .then(() => this.setRegId());
        this.props.fetchEvents();
        window.scrollTo(0, 0);
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
                <button id="owner-button" value={this.props.event.id} onClick={this.handleDelete}>DELETE</button>
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
                <button id="owner-button" value={this.props.event.id} onClick={this.handleEdit}>EDIT</button>
            )
        }
    }

    setRegId() {
        let userId = this.props.currentUser.id;
        let registrations = this.props.event.registrations || {};
        if (registrations.hasOwnProperty(userId)) {
            this.setState({ regId: registrations[userId]["id"]});
            this.setState({ registered: true });
        }
    }
         
    handleRegister(e) {
        e.preventDefault();
        
        if (this.props.currentUser.id) {
            if (this.state.registered) {
                this.deleteRegistration(this.state.regId);
                this.setState({ registered: false });
            } else {
                this.createRegistration({ registration: {event_id: this.props.event.id } })
                .then(({ event }) => this.setState({ regId: event["id"] } ));
                this.setState({ registered: true });
            }
        } else {
            this.props.history.push('/signin');
        }
    }

    registerButton() {
        let userId = this.props.currentUser.id;
        let ownerId = this.props.event.owner_id;
        if (userId === ownerId) {
            return;
        }

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

    handleBookmark(e) {
        e.preventDefault();
        if (this.props.currentUser.id) {
            let bookmarks = this.props.event.bookmarks || {};
            let userId = this.props.currentUser.id;
            let bookmark = bookmarks[userId];

            if (bookmark) {
                this.props.deleteBookmark(bookmark.id)
                    .then(() => this.props.fetchEvent(this.props.event.id));
            } else {
                this.props.createBookmark({ bookmark: { event_id: e.currentTarget.value } })
                    .then(() => this.props.fetchEvent(this.props.event.id));
            }
        } else {
            this.props.history.push('/signin');
        }
    }

    bookmarkButton() {
        let bookmarks = this.props.event.bookmarks || {};
        let userId = this.props.currentUser.id;
        if (bookmarks.hasOwnProperty(userId)) {
            return (
                <button id="bookmarked" value={this.props.event.id} onClick={this.handleBookmark}>
                    <i className="fas fa-bookmark"></i>
                </button>
            )
        } else {
            return (
                <button id="bookmark" value={this.props.event.id} onClick={this.handleBookmark}>
                    <i className="far fa-bookmark"></i>
                </button>
            )
        }
    }

    render() {
        const { event, events, currentUser, createBookmark, deleteBookmark, fetchEvent, history } = this.props;

        if (!event) {
            return null;
        }

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

        if (this.props.event.id === 23) {
            image = window.magiciansURL;
        } else if (this.props.event.id === 24) {
            image = window.excisionURL;
        } else if (this.props.event.id === 25) {
            image = window.hauntedhouseURL;
        } else if (this.props.event.id === 26) {
            image = window.dinnerdateURL;
        } else if (this.props.event.id === 27) {
            image = window.fireworksURL;
        } else if (this.props.event.id === 28) {
            image = window.newyearURL;
        } else if (this.props.event.id === 29) {
            image = window.harrypotterURL;
        } else if (this.props.event.id === 30) {
            image = window.candlelitURL;
        }

        let filteredEvents;
        switch (event.category) {
            case 'Activities':
                filteredEvents = events.filter(e => (e.category === 'Activities' || e.category === 'Entertainment') && e.title !== event.title);
                break;
            case 'Entertainment':
                filteredEvents = events.filter(e => (e.category === 'Activities' || e.category === 'Entertainment') && e.title !== event.title);
                break;
            case 'Food and Drink':
                filteredEvents = events.filter(e => (e.category === 'Food and Drink' || e.category === 'Activities') && e.title !== event.title);
                break;
            case 'Free':
                filteredEvents = events.filter(e => (e.category === 'Free' || e.category === 'Other') && e.title !== event.title);
                break;
            case 'Music':
                filteredEvents = events.filter(e => (e.category === 'Music' || e.category === 'Entertainment') && e.title !== event.title);
                break;
            case 'Nightlife':
                filteredEvents = events.filter(e => (e.category === 'Nightlife' || e.category === 'Music') && e.title !== event.title);
                break;
            case 'Other':
                filteredEvents = events.filter(e => (e.category === 'Other' || e.category === 'Free') && e.title !== event.title);
                break;
            case 'Sports and Fitness':
                filteredEvents = events.filter(e => (e.category === 'Sports and Fitness' || e.category === 'Travel and Outdoor') && e.title !== event.title);
                break;
            case 'Travel and Outdoor':
                filteredEvents = events.filter(e => (e.category === 'Travel and Outdoor' && e.category === 'Sports and Fitness') && e.title !== event.title);
                break;
            default:
                filteredEvents = events.filter(e => e.owner_id === event.owner_id && e.title !== event.title);
                break;
        }

        filteredEvents = filteredEvents.map(event => (
            <EventIndexItem currentUser={currentUser} fetchEvent={fetchEvent} createBookmark={createBookmark} deleteBookmark={deleteBookmark} key={`suggested-${event.id}`} event={event} history={history} />
        ));

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
                        <p id="event-owner">by {event.ownerFirstName} {event.ownerLastName}</p>
                        <p>{event.category}</p>
                    </div>
                </header>
                <div className="buttons">
                    <div>
                        {this.bookmarkButton()}
                    </div>
                    <div>
                        {this.editButton()}
                        {this.deleteButton()}
                        {this.registerButton()}
                    </div>
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
                <div className="similar-events">
                    <h5>Similar Events</h5>
                    <ul className='event-list'>
                        {filteredEvents.length > 0 ? (
                            filteredEvents
                        ) : (
                                <p id="no-events">No events... Maybe you can create one!</p>
                            )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default EventShow;