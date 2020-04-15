import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, deleteEvent } from '../../actions/event_actions';
import { createRegistration, deleteRegistration } from '../../actions/registration_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';

const msp = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session
});

const mdp = (dispatch) => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createRegistration: registration => dispatch(createRegistration(registration)),
    deleteRegistration: registrationId => dispatch(deleteRegistration(registrationId)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark)),
    deleteBookmark: bookmarkId => dispatch(deleteBookmark(bookmarkId))

});

export default connect(msp, mdp)(EventShow);