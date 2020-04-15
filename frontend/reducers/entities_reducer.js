import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import EventsReducer from './events_reducer';
import BookmarksReducer from './bookmarks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: EventsReducer,
    bookmarks: BookmarksReducer
});

export default entitiesReducer;