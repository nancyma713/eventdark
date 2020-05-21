import { logout } from '../../actions/session_actions';
import { fetchSearchEvents } from '../../actions/event_actions';
import { connect } from 'react-redux';
import Nav from './nav';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchSearchEvents: (searchTerm) => dispatch(fetchSearchEvents(searchTerm))
});

export default connect(msp, mdp)(Nav);