import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    handleDelete() {
        e.preventDefault();
        this.props.deleteEvent();
    }

    // handleRegister() {
    //     e.preventDefault();
    // }

    render() {
        const { event, deleteEvent } = this.props;

        return (
            <div>
                <h1>{event.title}</h1>
                <div>Date and Time: 
                    <br />
                    <time>Event Start: {event.start_date}</time>
                    <br />
                    <time>Event End: {event.end_date}</time>
                </div>
                <p>{event.description}</p>

                <div>
                    <button>REGISTER</button>

                </div>
            </div>
        )
    }
}

export default EventShow;