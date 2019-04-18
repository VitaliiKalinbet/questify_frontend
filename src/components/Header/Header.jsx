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

const Header = ({ user, isQuest, exit }) => (
  <header className={styles.container}>
    <div className={styles.header}>
      <img className={styles.logostyle} src={logo} alt="Logo" />
      <UserInfo user={user} />
      <div className={styles.right}>
        <ChallengeStatus isQuest={isQuest} />
        <Logout exit={exit} />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.string.isRequired,
  isQuest: PropTypes.bool.isRequired,
  exit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: userSelectors.userName(state),
  isQuest: false
});

const mapDispatchToProps = {
  exit: logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
