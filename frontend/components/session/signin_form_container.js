import { connect } from 'react-redux';
import SigninForm from './signin_form';
import { signin, login, clearErrors } from '../../actions/session_actions';

const msp = (state) => ({
    email: state.session.email,
    exist: state.session.exist,
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    signin: (email) => dispatch(signin(email)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SigninForm);