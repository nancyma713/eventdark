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
        //fix these later

        return (
            <li className="event-item">
                <div className="images">
                    <Link to={`events/${this.props.event.id}`}>
                        <img src={image} alt={this.props.event.title} />
                    </Link>
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