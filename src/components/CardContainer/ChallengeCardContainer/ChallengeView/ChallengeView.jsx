import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './ChallengeView.module.css';
import TpophySvg from '../../../../assets/images/trophy/TpophySvg';
import FireSvg from '../../../../assets/images/icons/fire/FireSvg';

const ChallengeView = ({ difficulty, dueDate, group, name, onModeEdit, isFireIconOn }) => {
  return (
    <div className={s.card} onClick={onModeEdit}>
      <header className={s.cardHeader}>
        <div className={s.difficultySelect_container}>
          <DifficultySelect difficulty={difficulty} />
        </div>
        <div className={s.starContainer}>
          <TpophySvg className={s.trophy} />
        </div>
      </header>
      <main className={s.cardMain}>
        <h4 className={s.challangeTitle}>challange</h4>
        <h2 className={s.title}>{name}</h2>
        <div className={s.dateTimeContainer}>
          <Datetime closeOnSelect dateFormat="DD.MM.YYYY" defaultValue={moment(dueDate)} />
          {isFireIconOn && <FireSvg className={s.fire} />}
        </div>
      </main>
      <footer className={s.cardFooter}>
        <div className={s.groupsContainer}>
          <GroupSelect group={group} />
        </div>
      </footer>
    </div>
  );
};

ChallengeView.propTypes = {
  isFireIconOn: PropTypes.bool.isRequired,
  onModeEdit: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ChallengeView;
