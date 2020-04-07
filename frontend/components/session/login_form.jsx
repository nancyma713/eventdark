import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
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
        if (this.props.user) {
            return <Redirect to='/' />
        }

        return (
            <div className='login-form'>
                <h2>Welcome back</h2>
                <p>Please enter your password to log in.</p>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <label>Email address
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br/>
                    <label>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button>Log In</button>
                    <p>Forgot password</p>
                </form>
            </div>
        );
    }
}

export default LoginForm;