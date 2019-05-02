import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './QuestView.module.css';
import activeStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-active.svg';
import notActiveStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-not-active.svg';
import FireSvg from '../../../../assets/images/icons/fire/FireSvg';

const QuestView = ({ difficulty, dueDate, group, isPriority, name, categoryName, onModeEdit, done, isFireIconOn }) => {
  const notDoneFormatTime = moment(dueDate).format('hh:mm');
  const doneFormatTime = moment(dueDate).format('MMMM DD, hh:mm');
  const isActiveFireIcon = !done && categoryName === 'today';
  const dateFormate = done ? (
    <p className={s.date}>{doneFormatTime}</p>
  ) : (
    <p className={s.date}>{`${categoryName}, ${notDoneFormatTime}`}</p>
  );
  return (
    <div className={s.card} onClick={!done ? onModeEdit : null}>
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
        <div className={s.date_fire_container}>
          {dateFormate}
          {isActiveFireIcon && isFireIconOn && <FireSvg className={s.fire} />}
        </div>
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
  isFireIconOn: PropTypes.bool.isRequired,
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  isPriority: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onModeEdit: PropTypes.func.isRequired
};

export default QuestView;
