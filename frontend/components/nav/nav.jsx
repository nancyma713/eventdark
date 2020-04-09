import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div className='navbar'>
                    <div className="logo">
                        <Link to='/'>eventdark</Link>
                    </div>
                    <div className="nav-content">
                        <span id="event">
                            <Link to="/events/create"><i className="fas fa-plus"></i> Create Event</Link>
                        </span>
                        <span>
                            <Link to={`/users/${this.props.currentUser.id}/bookmarks/events`}>
                                <i className="far fa-bookmark"></i> Bookmarks
                            </Link>
                        </span>
                        <span>
                            <Link to={`/users/${this.props.currentUser.id}`}>
                                <i className="fas fa-ticket-alt"></i> Registrations
                            </Link>
                        </span>
                    </div>
                    <div className="profile-dropdown">
                        <i className="far fa-user" id="user-icon"></i>
                        <ul className="dropdown-content">
                            <li id="user-info">
                                <Link to="#">
                                    <i className="far fa-user" id="user-icon"></i> {this.props.currentUser.email}
                                </Link>
                            </li>
                            <li>
                                <Link to={`/users/${this.props.currentUser.id}/bookmarks/events`}>My Bookmarks</Link>
                            </li>
                            <li id="registrations">
                                <Link to={`/users/${this.props.currentUser.id}`}>My Registrations</Link>
                            </li>
                            <li><Link to="/events/create">Create Event</Link></li>
                            <li><button onClick={this.props.logout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='navbar'>
                    <div className="logo">
                        <Link to='/'>eventdark</Link>
                    </div>
                    <div className="navbar-right">
                        <span><Link to="/"><i className="fas fa-search"></i> Browse Events</Link></span>
                        <span id="help"><i className="far fa-question-circle"></i> Help</span>
                        <span><Link to="/signin">Sign In</Link></span>
                    </div>
                </div>
            );
        }
    }
}

export default Nav;