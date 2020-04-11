import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const startDate = new Date(this.props.event.start_date);
        const startDateString = startDate.toDateString();
        const formatTime = new Date(startDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');

        return (
            <li className="event-item">
                <div className="images">
                    {/* image */}
                    <button><i className="far fa-bookmark"></i></button>
                </div>
                <div className="event-info">
                    <p>{startDateString}, {formatTime}</p>
                    <h3><Link to={`events/${this.props.event.id}`}>{this.props.event.title}</Link></h3>
                </div>
            </li>
        )
    }

}

export default EventIndexItem;