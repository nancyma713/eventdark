import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    scrollToEvents() {
        window.scrollTo({
            top: 500,
            behavior: "smooth"
        })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchEvents(this.state.searchInput)
            .then(() => this.scrollToEvents())
            .then(this.setState({ searchInput: "" }));
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div className='navbar'>
                    <div className="logo">
                        <Link to='/'>eventdark</Link>
                    </div>
                    <div className="nav-content">
                        <div className="searchbar-container">
                            <div className="searchbar" id="logged-in-search">
                                <i className="fas fa-search"></i> 
                                <form onSubmit={this.handleSubmit}>
                                    <input id="search-input" type="text" placeholder="Search events" value={this.state.searchInput} onChange={this.update("searchInput")}/>
                                </form>
                            </div>
                        </div>
                        <div className="nav-links">
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
                    </div>
                    <div className="profile-dropdown">
                        <i className="far fa-user" id="nav-user-icon"></i>
                        <ul className="dropdown-content">
                            <li id="user-info">
                                <Link to={`/users/${this.props.currentUser.id}`}>
                                    <i className="far fa-user" id="user-icon"></i>
                                    <div id="user-details">
                                        <span id="fname-lname">
                                            {this.props.currentUser.first_name} {this.props.currentUser.last_name}
                                        </span>
                                        <br />
                                        {this.props.currentUser.email}
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/users/${this.props.currentUser.id}/bookmarks/events`}>My Bookmarks</Link>
                            </li>
                            <li id="registrations">
                                <Link to={`/users/${this.props.currentUser.id}`}>My Registrations</Link>
                            </li>
                            <li id="hosted-events">
                                <Link to={`/users/${this.props.currentUser.id}`}>My Hosted Events</Link>
                            </li>
                            <li><Link to="/events/create">Create Event</Link></li>
                            <li><Link to="/">Browse Events</Link></li>
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
                    <div className="nav-content">
                        <div className="searchbar">
                            <i className="fas fa-search"></i>
                            <form onSubmit={this.handleSubmit}>
                                <input id="search-input" type="text" placeholder="Search events" value={this.state.searchInput} onChange={this.update("searchInput")} />
                            </form>
                        </div>
                        <div className="navbar-right" id="nav-right">
                            <span id="browse-events"><Link to="/"><i className="fas fa-search"></i> Browse Events</Link></span>
                            <span id="help"><i className="far fa-question-circle"></i> Help
                            <li id="help-dropdown">Help is on the way! :)</li>
                            </span>
                            <span><Link to="/signin">Sign In</Link></span>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Nav;