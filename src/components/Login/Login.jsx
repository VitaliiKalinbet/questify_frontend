/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { asyncOperetion } from '../../redux/user';
import styles from './Login.module.css';

const INITIAL_STATE = {
  nickName: ''
};

class Login extends Component {
  state = { ...INITIAL_STATE };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userLogin } = this.props;
    const { nickName } = this.state;
    userLogin(nickName);
    this.reset();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const input = (
      <label htmlFor="nickName" className={styles.login__label}>
        Choose your name to sign up or log in
        <input
          className={styles.login__input}
          onChange={this.handleChange}
          name="nickName"
          type="nickName"
          value={this.state.nickName}
          required="required"
          minLength="5"
          placeholder=""
        />
      </label>
    );
    return (
      <div className={styles.login_container}>
        <h1 className={styles.logo}>Questify</h1>
        <p className={styles.login__slogan}>
          Questify will turn your life into a thrilling game full of amazing quests and exciting challenges.
        </p>
        <form className={styles.login_form} onSubmit={this.handleSubmit}>
          {input}
          <button className={styles.login_button} type="submit">
            go!
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  userLogin: asyncOperetion.loginUser
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
