import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logout.module.css';

const Logout = ({ exit }) => (
  <div>
    <button className={styles.button} type="button" onClick={exit}>
      <svg className={styles.logout} width="25px" height="25px" viewbox="0 0 25 25" />
    </button>
  </div>
);

Logout.propTypes = {
  exit: PropTypes.func.isRequired
};

export default Logout;
