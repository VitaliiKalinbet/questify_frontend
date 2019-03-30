/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import styles from './Login.module.css';

const INITIAL_STATE = {
  login: ''
};

class SignIn extends Component {
  state = { ...INITIAL_STATE };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { signIn } = this.props;
    // signIn({ ...this.state });
    // this.reset();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const input = SignInConfig.map(el => (
      <label key={el.label} className={styles.label}>
        {el.label}
        <input
          key={el.name}
          className={styles.input}
          onChange={this.handleChange}
          name={el.name}
          type={el.type}
          value={this.state[el.name]}
          // autoComplete={el.autoComplete}
          placeholder={el.placeholder}
        />
      </label>
    ));
    return (
      <div className={styles.auth_container}>
        <form className={styles.auth_form} onSubmit={this.handleSubmit}>
          {input}
          <button className={styles.button} type="submit">
            Log in!
          </button>
        </form>
      </div>
    );
  }
}

export default withAuth(SignIn);
