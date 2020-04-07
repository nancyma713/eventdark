import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            email: '',
            password: ''
        });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        if (this.props.user) {
            return <Redirect to='/' />
        }

        return (
            <div className='session-form'>
                <h2>{this.props.formType}</h2>
            </div>
        );
    }


}

export default SignupForm;