import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import UserInfo from '../UserInfo/UserInfo';
import ChallengeStatus from '../ChallengeStatus/ChallengeStatus';
import Logout from '../Logout/Logout';

import styles from './Header.module.css';

const Header = ({ user, challengeSendToUser, exit }) => (
  <header className={styles.container}>
    <div className={styles.header}>
      <Logo />
      <UserInfo user={user} />
      <div className={styles.right}>
        <ChallengeStatus challengeSendToUser={challengeSendToUser} />
        <Logout exit={exit} />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.string.isRequired,
  challengeSendToUser: PropTypes.bool.isRequired,
  exit: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
  user: 'John’s Quest Log',
  challengeSendToUser: false
});

const mapDispatchToProps = {
  exit: () => console.log('logout!!!') || { type: '' }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
