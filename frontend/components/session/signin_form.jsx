import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            checkEmail: true,
            errors: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.signin(this.state)
            .then(() => this.setState({ checkEmail: false }));
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.login({ email: 'user@demo.com', password: 'demopw'})
    }
    
    update() {
        return e => this.setState({ email: e.currentTarget.value })
    }
    
    renderErrors() {
        return (
            <ul className="form-errors">
            {this.state.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
            ))}
            </ul>
        );
    }
    
    render() {
        if (this.state.checkEmail === false) {
            if (this.props.exist) {
                return <Redirect to="signin/login" />
            } else if (this.isValidEmail(this.props.email)) {
                return <Redirect to="signin/signup" />
            } else {
                if (!this.state.errors.includes('Please enter a valid email address')) {
                    this.state.errors.push('Please enter a valid email address');
                }
            }
        }

        return (
            <div className="signin-form">
                <h1 className="e-logo">e</h1>
                <h2>Sign up or log in</h2>
                <p>Enter your email to get started.</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-content">
                        <label>Email address
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update()}
                            />
                        </label>
                        {this.renderErrors()}
                        <button>Get Started</button>
                        <p id="or">or</p>
                        <button onClick={this.handleDemo}>Demo User</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default SigninForm;