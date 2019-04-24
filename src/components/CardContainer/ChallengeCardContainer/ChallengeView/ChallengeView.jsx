import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './ChallengeView.module.css';
import TpophySvg from '../../../../assets/images/trophy/TpophySvg';
import editIcon from '../../../../assets/images/icons/edit/edit.png';

const ChallengeView = ({ difficulty, dueDate, group, name, onModeEdit }) => {
  return (
    <div className={s.card}>
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
        </div>
      </main>
      <footer className={s.cardFooter}>
        <div className={s.groupsContainer}>
          <GroupSelect group={group} />
        </div>
        <img onClick={onModeEdit} className={s.editIconStyle} src={editIcon} alt="editIcon" />
      </footer>
    </div>
  );
};

ChallengeView.propTypes = {
  onModeEdit: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ChallengeView;
