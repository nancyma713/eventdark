import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchEvents } from '../../actions/event_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    events: state.entities.events
});

const mdp = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(msp, mdp)(UserShow);