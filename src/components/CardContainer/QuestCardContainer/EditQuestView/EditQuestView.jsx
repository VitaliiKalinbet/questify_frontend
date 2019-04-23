import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './EditQuestView.module.css';
import activeStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-active.svg';
import notActiveStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-not-active.svg';
import dropDownArrow from '../../../../assets/images/icons/drop-down-arrow.png';

const EditQuestView = ({
  difficulty,
  dueDate,
  group,
  toggleIsPriority,
  isPriority,
  name,
  toggleDifficultySelect,
  isOpenDifficultySelect,
  toggleOpenGroupSelect,
  isOpenGroupSelect
}) => {
  return (
    <div className={s.card}>
      <header className={s.cardHeader}>
        <div className={s.difficultySelect_container} onClick={toggleDifficultySelect}>
          <DifficultySelect isOpenDifficultySelect={isOpenDifficultySelect} difficulty={difficulty} />
          <img className={s.dropDownArrow} src={dropDownArrow} alt="dropDownArrow" />
        </div>
        <div className={s.starContainer} onClick={toggleIsPriority}>
          <img className={s.star} src={isPriority ? activeStar : notActiveStar} alt="star" />
        </div>
      </header>
      <main className={s.cardMain}>
        <h2 className={s.title}>{name}</h2>
        <p className={s.date}>{moment(dueDate).format('DD-MM-YYYY, HH:MM')}</p>
      </main>
      <footer className={s.cardFooter}>
        <div className={s.groupsContainer} onClick={toggleOpenGroupSelect}>
          <img className={s.ArrowForGroupSelect} src={dropDownArrow} alt="dropDownArrow" />
          <GroupSelect isOpenGroupSelect={isOpenGroupSelect} group={group} />
        </div>
        <div>Tools</div>
      </footer>
    </div>
  );
};

EditQuestView.propTypes = {
  isOpenGroupSelect: PropTypes.bool.isRequired,
  toggleOpenGroupSelect: PropTypes.func.isRequired,
  toggleIsPriority: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  isPriority: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default EditQuestView;
