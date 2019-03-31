import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import UserInfo from '../UserInfo/UserInfo';
import ChallengeStatus from '../ChallengeStatus/ChallengeStatus';
import Logout from '../Logout/Logout';

import styles from './Header.module.css';

const Header = ({ user, isQuest, exit }) => (
  <header className={styles.container}>
    <div className={styles.header}>
      <Logo />
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

const mapStateToProps = () => ({
  user: 'John’s Quest Log',
  isQuest: false
});

const mapDispatchToProps = {
  exit: () => console.log('logout!!!') || { type: '' }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
