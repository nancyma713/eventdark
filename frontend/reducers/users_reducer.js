import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_REGISTRATION, REMOVE_REGISTRATION } from '../actions/registration_actions';

const userReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        default:
            return state;
    }
}
export default userReducer;