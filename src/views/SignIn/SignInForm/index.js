import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const { email, password } = this.state;
    const { submitForm } = this.props;

    submitForm({
      email,
      password
    });

    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    const isInvalid = password === '' || email === '';

    return(
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={e => this.setState({'email': e.target.value})}
          type="text"
          placeholder="Email Address"
        />

        <input
          value={password}
          onChange={e => this.setState({'password': e.target.value})}
          type="password"
          placeholder="Password"
        />

        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        <p>{this.props.error}</p>
      </form>
    )
  }
}

export default SignInForm;