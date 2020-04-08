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
                    <div className="profile-dropdown">Profile
                        <ul className="dropdown-content">
                            <li id="user-info"><Link to="#">{this.props.currentUser.first_name}
                                {this.props.currentUser.email}
                            </Link></li>
                            <li><Link to="#">Create Event</Link></li>
                            <li><Link to="#">My Bookmarks</Link></li>
                            <li><Link to="#">My Registrations</Link></li>
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
                        <span><Link to="#">Browse Events</Link></span>
                        <span id="help">Help</span>
                        <span><Link to="/signin">Sign In</Link></span>
                    </div>
                </div>
            );
        }
    }
}

export default Nav;