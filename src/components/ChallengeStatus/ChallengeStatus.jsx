/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChallengeStatus.module.css';
import { ReactComponent as Trophy } from '../../assets/images/trophy/trophy.svg';

const ChallengeStatus = ({ isNewChallenge }) => (
  <div className={!isNewChallenge ? styles.challendgeFalse : styles.challendgeTrue}>
    <Trophy className={!isNewChallenge ? styles.trophyActive : styles.trophyNoActive} />
  </div>
);

ChallengeStatus.propTypes = {
  isNewChallenge: PropTypes.bool.isRequired
};

export default ChallengeStatus;
