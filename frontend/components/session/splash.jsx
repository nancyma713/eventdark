import React from 'react';
import EventIndexContainer from '../events/event_index_container';

const Splash = ({ currentUser, logout }) => {

    return (
        <div className="splash-body">
            <div className="banner-section">
                <img id="banner" src={window.bannerURL} alt="Find events near you" />
            </div>
            <div className="index-body">
                <h1>All Events</h1>
                <EventIndexContainer />
                <div className="category-browse">
                    <h4>Browse by Category</h4>
                    <ul className="category-list">
                        <li>Entertainment</li>
                        <li>Food and Drink</li>
                        <li>Free</li>
                        <li>Music</li>
                        <li>Other</li>
                    </ul>
                </div>
            </div>
        </div>
    );


}

export default Splash;