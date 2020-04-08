import React from 'react';

const Splash = ({ currentUser, logout }) => {
    // if (currentUser) {
    //     return (
    //         <div>
    //             <h4>Welcome, {currentUser.email}</h4>
    //             {/* <button onClick={logout}>Logout</button> */}
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="header-titles">
    //             <h1>Popular Events</h1>
    //             <h1>Find Events</h1>
    //         </div>
    //     );
    // }

    return (
        <div className="header-titles">
            <h1>Popular Events</h1>
            <h1>Find Events</h1>
        </div>
    );


}

export default Splash;