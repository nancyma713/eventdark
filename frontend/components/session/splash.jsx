import React from 'react';
import EventIndexContainer from '../events/event_index_container';
import Category from '../events/category';

const Splash = () => {

    return (
        <div className="splash-body">
            <div className="banner-section">
                <img id="banner" src={window.bannerURL} alt="Find events near you" />
            </div>
            <div className="banner-headers">
                <p id="darkness-text">When darkness is your comfort zone...</p>
                <p>Connect through DARK events!</p>
            </div>
            <div className="index-body">
                <div className="category-browse">
                    <h1>Browse by Top Categories</h1>
                    <Category />
                </div>
            </div>
        </div>
    );


}

export default Splash;