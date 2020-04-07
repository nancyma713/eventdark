import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveEmail = ({ email, match }) => ({
    type: RECEIVE_EMAIL,
    email,
    match
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
});

export const signin = (email) => dispatch => (
    APIUtil.signin(email)
        .then(email => dispatch(receiveEmail(email)))
);

export const signup = (user) => dispatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)), e => dispatch(receiveErrors(e)))
);

export const login = (user) => dispatch => (
    APIUtil.login(user)
    .then( user => dispatch(receiveCurrentUser(user)), e => dispatch(receiveErrors(e)))
);

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()), e => dispatch(receiveErrors(e)))
);
