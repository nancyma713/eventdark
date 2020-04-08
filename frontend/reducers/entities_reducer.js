import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import EventsReducer from './events_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: EventsReducer
});

export default entitiesReducer;