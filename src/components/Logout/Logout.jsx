import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logout.module.css';

const Logout = ({ exit }) => (
  <div>
    <button type="button" onClick={() => exit()} className={styles.logout} />
  </div>
);

Logout.propTypes = {
  exit: PropTypes.func.isRequired
};

export default Logout;
