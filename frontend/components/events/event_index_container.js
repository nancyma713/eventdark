import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import EventIndex from './event_index';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';

const msp = (state) => ({
    events: Object.values(state.entities.events),
    currentUser: state.session
});

const mdp = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark)),
    deleteBookmark: bookmarkId => dispatch(deleteBookmark(bookmarkId))
});

export default connect(msp, mdp)(EventIndex);