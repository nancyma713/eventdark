import React from 'react';
import EventIndexContainer from '../events/event_index_container';

const Splash = ({ currentUser, logout }) => {

    return (
        <div className="index-body">
            <h1>Popular Events</h1>
                <EventIndexContainer />
        </div>
    );


}

export default Splash;