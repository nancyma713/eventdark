import React from 'react';
import EventIndexContainer from '../events/event_index_container';

class Splash extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    scrollToEvents() {
        window.scrollTo({
            top: 500,
            behavior: "smooth"
        })
    }

    render() {
        return (
            <div className="splash-body">
                <div className="banner-section">
                    <img id="banner" src={window.bannerURL} alt="Connect through dark events" />
                </div>
                <div className="banner-headers">
                    <p id="darkness-text">When darkness is your comfort zone...</p>
                    <p id="connect">Connect through</p>
                    <p id="dark-events">DARK events!</p>
                    <button id="start-browsing-btn" onClick={() => this.scrollToEvents()}>
                        <span>Browse Events</span><i className="fas fa-arrow-right"></i></button>
                </div>
                <div className="index-body">
                    <div className="category-browse">
                        <h1>Browse by Category</h1>
                        <EventIndexContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;