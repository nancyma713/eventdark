import React from 'react';

const Splash = ({ currentUser, logout }) => {
    if (currentUser) {
        return (
            <div>
                <h4>Welcome, {currentUser.first_name}</h4>
                <button onClick={logout}>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                Popular Events
            </div>
        );
    }




}

export default Splash;