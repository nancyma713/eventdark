import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvents, fetchEvent, deleteEvent } from '../../actions/event_actions';
import { createRegistration, deleteRegistration } from '../../actions/registration_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    events: Object.values(state.entities.events),
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session
});

const mdp = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createRegistration: registration => dispatch(createRegistration(registration)),
    deleteRegistration: registrationId => dispatch(deleteRegistration(registrationId)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark)),
    deleteBookmark: bookmarkId => dispatch(deleteBookmark(bookmarkId))

});

export default connect(msp, mdp)(EventShow);