import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChallengeStatus.module.css';

const ChallengeStatus = ({ challengeSendToUser }) => (
  <div className={challengeSendToUser ? styles.challendgeTrue : styles.challendgeFalse} />
);

ChallengeStatus.propTypes = {
  challengeSendToUser: PropTypes.bool.isRequired
};

export default ChallengeStatus;
