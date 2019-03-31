import React, { Component } from 'react';
import Login from '../../components/Login/Login';

class LoginPage extends Component {
  state = {};

  render() {
    return <Login {...this.props} />;
  }
}

export default LoginPage;
