import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const msp = (state) => ({
    events: Object.values(state.entities.events)
});

const mdp = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(msp, mdp)(EventIndex);