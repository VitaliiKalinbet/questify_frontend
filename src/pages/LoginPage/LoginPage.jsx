import React from 'react';
import Login from '../../components/Login/Login';
import s from './LoginPage.module.css';

const LoginPage = ({ ...props }) => {
  return (
    <div className={s.loginPage}>
      <Login {...props} />
    </div>
  );
};

export default LoginPage;
