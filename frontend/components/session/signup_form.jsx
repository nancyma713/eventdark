import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: '',
            first_name: '',
            last_name: ''
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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='signup-form'>
                <h2>Welcome</h2>
                <p>Create an account.</p>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <label>Email address
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br />
                    <label>First Name
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                        />
                    </label>
                    <label>Last Name
                        <input type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
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