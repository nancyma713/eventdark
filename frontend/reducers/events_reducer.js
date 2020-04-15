import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import { RECEIVE_REGISTRATION, REMOVE_REGISTRATION } from '../actions/registration_actions';
import { RECEIVE_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';

const EventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            nextState[action.event.id] = action.event;
            return nextState;
        case REMOVE_EVENT:
            delete nextState[action.eventId];
            return nextState;
        case RECEIVE_REGISTRATION:
            return state;
        case REMOVE_REGISTRATION:
            return state;
        case RECEIVE_BOOKMARKS:
            return state;
        case RECEIVE_BOOKMARK:
            return state;
        case REMOVE_BOOKMARK:
            return state;
        default:
            return state;
    }
}

export default EventsReducer;