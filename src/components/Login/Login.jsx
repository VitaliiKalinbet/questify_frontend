/* eslint-disable react/destructuring-assignment */
/* eslint react/prop-types: 0 */
/* eslint react/no-unused-prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncOperetion } from '../../redux/user';
import styles from './Login.module.css';
import { loginUser } from '../../services/api';

const INITIAL_STATE = {
  nickname: ''
};

class Login extends Component {
  state = { ...INITIAL_STATE };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userLogin, history } = this.props;
    const { nickname } = this.state;

    userLogin({ nickname }).then(() => history.push('/dashboard'));
    loginUser(nickname);
    this.reset();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className={styles.login_container}>
        <h1 className={styles.logo}>Questify</h1>
        <p className={styles.login__slogan}>
          Questify will turn your life into a thrilling game full of amazing quests and exciting challenges.
        </p>
        <form className={styles.login_form} onSubmit={this.handleSubmit}>
          <label htmlFor="nickname" className={styles.login__label}>
            Choose your name to sign up or log in
            <input
              className={styles.login__input}
              onChange={this.handleChange}
              name="nickname"
              type="nickname"
              value={this.state.nickname}
              required="required"
              minLength="5"
              placeholder=""
            />
          </label>
          <button className={styles.login_button} type="submit">
            go!
          </button>
        </form>
      </div>
    );
  }
}

// Login.propTypes = {
//   userLogin: PropTypes.func.isRequired
// };

const mapDispatchToProps = {
  userLogin: asyncOperetion.loginUser
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
