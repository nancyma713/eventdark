import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import CreateEventForm from './create_event_form';


const msp = (state) => ({
    event: {
        title: "",
        description: "",
        category: "",
        start_date: "",
        end_date: "",
        owner_id: state.entities.users[state.session.id]["id"]
    },
    errors: state.errors.events,
    currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    createEvent: event => dispatch(createEvent(event)),
    clearEventErrors: () => dispatch(clearEventErrors())
});

export default connect(msp, mdp)(CreateEventForm);