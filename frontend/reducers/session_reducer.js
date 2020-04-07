import { RECEIVE_CURRENT_USER, RECEIVE_EMAIL, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { id: action.user.id })
        case RECEIVE_EMAIL:
            return Object.assign({}, state, { email: action.email })
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}

export default sessionReducer;