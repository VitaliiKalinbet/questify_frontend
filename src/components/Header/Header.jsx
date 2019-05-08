import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserInfo from '../UserInfo/UserInfo';
import ChallengeStatus from '../ChallengeStatus/ChallengeStatus';
import Logout from '../Logout/Logout';
import { userSelectors } from '../../redux/user';

import styles from './Header.module.css';
import { logout } from '../../redux/auth/authAction';
import logo from '../../assets/logo/logo.png';

const Header = ({ user, isNewChallenge, exit }) => (
  <header className={styles.container}>
    <div className={styles.header}>
      <img className={styles.logostyle} src={logo} alt="Logo" />
      <UserInfo user={user} />
      <div className={styles.right}>
        <ChallengeStatus isNewChallenge={isNewChallenge} />
        <Logout exit={exit} />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  isNewChallenge: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
  exit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isNewChallenge: state.isNewChallenge,
  user: userSelectors.userName(state),
});

const mapDispatchToProps = {
  exit: logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
