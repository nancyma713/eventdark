import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: '',
            firstName: '',
            lastName: '',
            errors: this.props.errors
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
        <Redirect to="/" />
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div className='signup-form'>
                <h2>Welcome</h2>
                <p>Create an account.</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Email address
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br />
                    <label>First Name
                        <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                        />
                    </label>
                    <label>Last Name
                        <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                        />
                    </label>
                    <br/>
                    <label>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <p>{this.props.errors}</p>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;