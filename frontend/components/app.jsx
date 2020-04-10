import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './session/splash_container';
import NavContainer from './nav/nav_container';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import CreateEventContainer from './events/create_event_container';
import EditEventContainer from './events/edit_event_container';
import EventShowContainer from './events/event_show_container';
import UserShowContainer from './users/user_show_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';


const App = () => (
    <div className="all-containers">
        <header>
            <NavContainer />
        </header>
        <main className="main">
            <AuthRoute exact path="/signin" component={SigninFormContainer} />
            <AuthRoute exact path="/signin/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signin/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SplashContainer} />
            <Switch>
                <ProtectedRoute exact path="/events/create" component={CreateEventContainer} />
                <Route exact path="/events/:eventId" component={EventShowContainer} />
            </Switch>
            <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;