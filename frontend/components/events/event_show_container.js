import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, deleteEvent } from '../../actions/event_actions';

const msp = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session
});

const mdp = (dispatch) => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
});

export default connect(msp, mdp)(EventShow);