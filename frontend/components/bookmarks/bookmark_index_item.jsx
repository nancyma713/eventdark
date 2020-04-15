import React from 'react';
import { Link } from 'react-router-dom';

class BookmarkIndexItem extends React.Component {
    constructor(props){
        super(props)
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

        let image = window.defaultURL;

        let title = event.title;
        if (title.length > 50) {
            title = title.slice(0, 50) + '...';
        }

        return (
            <div className="reg-details">
                <div className="reg-start-date">
                    <p id="reg-start-month">{startMonth}</p>
                    <p id="reg-start-date">{startDateOnly}</p>
                </div>
                <div className="reg-image">
                    <Link to={`/events/${event.id}`}>
                        <img src={image} alt={event.title} />
                    </Link>
                </div>
                <div className="reg-event-details">
                    <Link to={`/events/${event.id}`}>
                        <h1>{title}</h1>
                    </Link>
                    <p>{startDateString}, {formatStartTime}</p>
                </div>
            </div>
        )
    }
}

export default BookmarkIndexItem;