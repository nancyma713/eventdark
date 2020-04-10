import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        return (
            <div className="user-show-page">
                <div className="user-info">
                    <i className="far fa-user" id="user-icon"></i>
                    <div id="show-user-details">
                        <span id="show-fname-lname">
                            {this.props.currentUser.first_name} {this.props.currentUser.last_name}
                        </span>
                    </div>
                </div>
                <div className="user-show-events">
                    <div className="user-regs">
                        <h3 className="user-show-headers">Registrations</h3>
                        {/* REGISTRATIONS GO HERE */}
                    </div>
                </div>

            </div>
        )
    }
}

export default UserShow;