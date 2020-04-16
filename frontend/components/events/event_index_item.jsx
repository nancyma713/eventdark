import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleBookmark = this.handleBookmark.bind(this);
    }

    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }

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
                // debugger
                this.props.createBookmark({ bookmark: { event_id: e.currentTarget.value } })
                    .then(() => this.props.fetchEvent(this.props.event.id));
            }
        } else {
            this.props.history.push('/signin/login');
        }
    }

    bookmarkButton() {
        let bookmarks = this.props.event.bookmarks || {};
        let userId = this.props.currentUser.id;
        if (bookmarks.hasOwnProperty(userId)) {
            return (
                <button className="bookmarked" value={this.props.event.id} onClick={this.handleBookmark}>
                    <i className="fas fa-bookmark"></i>
                </button>
            )
        } else {
            return (
                <button className="bookmark" value={this.props.event.id} onClick={this.handleBookmark}>
                    <i className="far fa-bookmark"></i>
                </button>
            )
        }
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

        let title = this.props.event.title;
        if (title.length > 60) {
            title = title.slice(0, 60) + '...';
        }

        return (
            <li className="event-item">
                <div className="images">
                    <Link to={`/events/${this.props.event.id}`}>
                        <img src={image} alt={this.props.event.title} />
                    </Link>
                    {this.bookmarkButton()}
                </div>
                <div className="event-info">
                    <p>{startDateString}, {formatTime}</p>
                    <h3><Link to={`/events/${this.props.event.id}`}>{title}</Link></h3>
                </div>
            </li>
        )
    }

}

export default EventIndexItem;