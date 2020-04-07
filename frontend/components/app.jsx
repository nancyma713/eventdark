import React from 'react';
import { Route } from 'react-router-dom';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../utils/route_util';


const App = () => (
    <div>
        <h1>eventdark</h1>
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signin/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signin/signup" component={SignupFormContainer} />
    </div>
);

export default App;