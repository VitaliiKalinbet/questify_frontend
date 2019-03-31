import React from 'react';
import styles from './Logo.module.css';
import logo from '../../assets/logo/logo.png';

const Logo = () => (
  <div className={styles.logo}>
    <img src={logo} alt="Logo" />
  </div>
);

export default Logo;
