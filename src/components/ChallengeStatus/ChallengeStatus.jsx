/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChallengeStatus.module.css';
import { ReactComponent as Trophy } from '../../assets/images/trophy/trophy.svg';

const ChallengeStatus = ({ isExsistActiveChallenge }) => (
  <div className={isExsistActiveChallenge ? styles.challendgeTrue : styles.challendgeFalse}>
    <Trophy className={isExsistActiveChallenge ? styles.trophyNoActive : styles.trophyActive} />
  </div>
);

ChallengeStatus.propTypes = {
  isExsistActiveChallenge: PropTypes.bool.isRequired
};

export default ChallengeStatus;
