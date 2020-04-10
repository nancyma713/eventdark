import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';

const msp = (state) => ({
    email: state.session.email,
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(LoginForm);