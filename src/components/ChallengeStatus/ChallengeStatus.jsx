import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChallengeStatus.module.css';

const ChallengeStatus = ({ challengeSendToUser }) => (
  <div>
    <svg
      className={challengeSendToUser ? styles.challendgeTrue : styles.challendgeFalse}
      width="20px"
      height="20px"
      viewbox="0 0 20 20"
    />
  </div>
);

ChallengeStatus.propTypes = {
  challengeSendToUser: PropTypes.bool.isRequired
};

export default ChallengeStatus;
