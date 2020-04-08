import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            checkEmail: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signin(this.state)
            .then( () => this.setState({ checkEmail: false }));
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
            {this.props.errors.map((error, i) => (
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
            } else {
                return <Redirect to="signin/signup" />
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
                        <p>OR</p>
                        <button onClick={this.handleDemo}>Demo User</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default SigninForm;