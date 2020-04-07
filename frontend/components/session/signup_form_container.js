import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => ({
    user: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: "Sign Up"
});

const mdp = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SignupForm);