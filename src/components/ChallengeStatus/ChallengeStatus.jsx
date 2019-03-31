/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
// import icon_svg from '../../assets/images/trophy/trophy.svg';
import styles from './ChallengeStatus.module.css';
import { ReactComponent as Trophy } from '../../assets/images/trophy/trophy.svg';

const ChallengeStatus = ({ isQuest }) => (
  <div className={isQuest ? styles.challendgeFalse : styles.challendgeTrue}>
    {/* <object alt="icon" type="image/svg+xml" data={icon_svg} className={styles.svg}>
      icon
    </object> */}
    <Trophy />
  </div>
);

ChallengeStatus.propTypes = {
  isQuest: PropTypes.bool.isRequired
};

export default ChallengeStatus;
