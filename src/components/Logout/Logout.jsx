import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logout.module.css';
import { ReactComponent as IconLogout } from '../../assets/images/logout/logout.svg';

const Logout = ({ exit }) => (
  <button
    className={styles.button}
    type="button"
    onClick={() => {
      localStorage.removeItem('questifyNickname');
      exit();
    }}
  >
    <IconLogout />
  </button>
);

Logout.propTypes = {
  exit: PropTypes.func.isRequired
};

export default Logout;
