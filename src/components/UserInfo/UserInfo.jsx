import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserInfo.module.css';

const UserInfo = ({ user }) => {
  const getUser = name => name.slice(0, 1);

  return (
    <div className={styles.user}>
      <span className={styles.circle}>{getUser(user)}</span>
      <span className={styles.name}>{user}</span>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.string.isRequired
};

export default UserInfo;
