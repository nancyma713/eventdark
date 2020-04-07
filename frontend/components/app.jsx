import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from './session/splash_container';
import NavContainer from './nav/nav_container';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../utils/route_util';


const App = () => (
    <div>
        <header>
            <NavContainer />
        </header>
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signin/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signin/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SplashContainer} />
    </div>
);

export default App;