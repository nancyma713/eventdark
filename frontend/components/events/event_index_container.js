import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import EventIndex from './event_index';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(msp, mdp)(EventIndex));