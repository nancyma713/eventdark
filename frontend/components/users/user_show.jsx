import React from 'react';
import UserRegistrationItem from './user_registration_item'

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchEvents();
    }

    render() {
        let eventRegistrations = Object.values(this.props.events).filter(event => {
            let registrations = event.registrations || {};
            return registrations.hasOwnProperty(this.props.currentUser.id);
        })

        let eventRegistrationItems = eventRegistrations.map(event => {
            return (
                <div key={`regs-${event.id}`}>
                    <UserRegistrationItem event={event} userId={this.props.currentUser.id} />
                </div>
            );
        })

        let hostedEventItems = this.props.currentUser.hostedEvents.map(event => {
            return (
                <div key={`hosted-${event.id}`}>
                    <UserRegistrationItem event={event} userId={this.props.currentUser.id} />
                </div>
            );
        })

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
                        {eventRegistrationItems.length > 0 ? (
                            eventRegistrationItems
                        ) : (
                                <p id="no-events">No registered events. Feel free to browse!</p>
                            )}
                    </div>
                    <div className="user-owned-events">
                        <h3 className="user-show-headers">My Hosted Events</h3>
                        {hostedEventItems.length > 0 ? (
                            hostedEventItems
                        ) : (
                                <p id="no-events">You aren't hosting any events yet... Maybe you can create one!</p>
                            )}
                    </div>
                </div>

            </div>
        )
    }
}

export default UserShow;