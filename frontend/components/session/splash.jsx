import React from 'react';

const Splash = ({ currentUser, logout }) => {
    if (currentUser) {
        return (
            <div>
                <h4>Welcome, {currentUser.firstName}</h4>
                <button onClick={logout}>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                
            </div>
        );
    }




}

export default Splash;