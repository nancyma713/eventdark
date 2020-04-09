import { connect } from 'react-redux';
import { updateEvent, clearEventErrors, fetchEvent } from '../../actions/event_actions';
import EditEventForm from './create_event_form';


const msp = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    errors: state.errors.events,
    currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    updateEvent: event => dispatch(updateEvent(event)),
    clearEventErrors: () => dispatch(clearEventErrors()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
});

export default connect(msp, mdp)(EditEventForm);