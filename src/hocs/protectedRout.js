/* eslint react/prop-types: 0 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticated } from '../redux/auth/authSelectors';

const privatRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: isAuthenticated(state)
});

export default connect(mapStateToProps)(privatRoute);
