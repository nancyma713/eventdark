import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // format start and end dates
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const dayOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri",
            "Sat"];

        return (
            <div>
                <div>
                    {/* image */}
                    {/* bookmark icon */}
                </div>
                <div className="event-info">
                    <time>{this.props.event.start_date}</time>
                    <h3><Link to={`events/${this.props.event.id}`}>{this.props.event.title}</Link></h3>
                </div>
            </div>
        )
    }

}

export default EventIndexItem;