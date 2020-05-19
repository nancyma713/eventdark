import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            inputEmail: '',
            password: '',
            first_name: '',
            last_name: '',
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkError = this.checkError.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.clearErrors();
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

    checkError(msg) {
        let allErrors = Object.values(this.props.errors);
        if (allErrors.includes(msg)) {
            return (
                <div className="form-errors">
                    {msg}
                </div>
            )
        } 
    }
    
    render() {
        return (
            <div className='signup-form'>
                <h1 className="e-logo">e</h1>
                <h2>Welcome</h2>
                <p>Create an account.</p>
                <form onSubmit={this.handleSubmit} className="form-content">
                    <label>Email address
                        <input disabled type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br />
                    <div className="name-signup">
                        <label className="fname-inputs">First Name
                            <input type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                            />
                        </label>
                        <label className="lname-inputs">Last Name
                            <input type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                />
                        </label>
                    </div>
                    <div className="signup-errors">
                        {this.checkError("First name can't be blank")}
                        {this.checkError("Last name can't be blank")}
                    </div>
                    <br/>
                    <label>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    {this.checkError("Password is too short (minimum is 6 characters)")}
                    <button>Sign Up</button>
                    <p id="terms">By continuing, I agree to Eventdark's Terms Of Service, Privacy Policy, and Community Guidelines.</p>
                    <Link to="login" className="login-instead">Log In Instead</Link>
                </form>
            </div>
        );
    }
}

export default SignupForm;