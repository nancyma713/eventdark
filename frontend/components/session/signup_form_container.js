import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions';

const msp = (state) => ({
    email: state.session.email,
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SignupForm);