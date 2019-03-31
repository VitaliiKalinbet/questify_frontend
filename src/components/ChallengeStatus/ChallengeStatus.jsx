/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChallengeStatus.module.css';
import { ReactComponent as Trophy } from '../../assets/images/trophy/trophy.svg';

const ChallengeStatus = ({ isQuest }) => (
  <div className={isQuest ? styles.challendgeFalse : styles.challendgeTrue}>
    <Trophy className={isQuest ? styles.trophyActive : styles.trophyNoActive} />
  </div>
);

ChallengeStatus.propTypes = {
  isQuest: PropTypes.bool.isRequired
};

export default ChallengeStatus;
