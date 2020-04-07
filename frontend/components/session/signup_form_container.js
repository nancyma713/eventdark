import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const msp = (state) => ({
    email: state.session.email,
    errors: state.errors.session // check on this
});

const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SignupForm);