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
                    <div className="navbar-right">
                        <span><Link to="#">{this.props.currentUser.first_name}
                            {this.props.currentUser.email}
                        </Link></span>
                        <span><Link to="#">Create Event</Link></span>
                        <span><Link to="#">My Bookmarks</Link></span>
                        <span><Link to="#">My Registrations</Link></span>
                        <span><button onClick={this.props.logout}>Logout</button></span>
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