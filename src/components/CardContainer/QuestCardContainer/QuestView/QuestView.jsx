import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './QuestView.module.css';
import activeStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-active.svg';
import notActiveStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-not-active.svg';

const QuestView = ({ difficulty, dueDate, group, isPriority, name, onModeEdit, done }) => {
  return (
    <div className={s.card} onClick={!done && onModeEdit}>
      <header className={s.cardHeader}>
        <div className={s.difficultySelect_container}>
          <DifficultySelect difficulty={difficulty} />
        </div>
        <div>
          <img className={s.star} src={isPriority ? activeStar : notActiveStar} alt="star" />
        </div>
      </header>
      <main className={s.cardMain}>
        <h2 className={s.title}>{name}</h2>
        <p className={s.date}>{moment(dueDate).format('DD-MM-YYYY, HH:MM')}</p>
      </main>
      <footer className={s.cardFooter}>
        <div>
          <GroupSelect group={group} />
        </div>
      </footer>
    </div>
  );
};

QuestView.propTypes = {
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  isPriority: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onModeEdit: PropTypes.func.isRequired
};

export default QuestView;
