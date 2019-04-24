import React from 'react';
import PropTypes from 'prop-types';
import s from './DifficultySelect.module.css';

const DifficultySelect = ({ difficulty, isOpenDifficultySelect, handleSaveSelectedDifficutlyItem, isQuest }) => {
  if (isOpenDifficultySelect)
    return (
      <ul className={isQuest ? s.list : `${s.list} ${s.darkList}`}>
        <li
          className={
            difficulty === 'Easy'
              ? isQuest
                ? `${s.listItem} ${s.select}`
                : `${s.listItem} ${s.whiteText}`
              : s.listItem
          }
          onClick={() => handleSaveSelectedDifficutlyItem('Easy')}
        >
          Easy
        </li>
        <li
          className={
            difficulty === 'Normal'
              ? isQuest
                ? `${s.listItem} ${s.select}`
                : `${s.listItem} ${s.whiteText}`
              : s.listItem
          }
          onClick={() => handleSaveSelectedDifficutlyItem('Normal')}
        >
          Normal
        </li>
        <li
          className={
            difficulty === 'Hard'
              ? isQuest
                ? `${s.listItem} ${s.select}`
                : `${s.listItem} ${s.whiteText}`
              : s.listItem
          }
          onClick={() => handleSaveSelectedDifficutlyItem('Hard')}
        >
          Hard
        </li>
      </ul>
    );
  if (difficulty === 'Easy') return <div className={s.DifficultyEasy}>{difficulty}</div>;
  if (difficulty === 'Normal') return <div className={s.DifficultyNormal}>{difficulty}</div>;
  if (difficulty === 'Hard') return <div className={s.DifficultyHard}>{difficulty}</div>;
};

DifficultySelect.defaultProps = {
  difficulty: '',
  isOpenDifficultySelect: false,
  handleSaveSelectedDifficutlyItem: () => {},
  isQuest: true
};

DifficultySelect.propTypes = {
  handleSaveSelectedDifficutlyItem: PropTypes.func,
  difficulty: PropTypes.string,
  isOpenDifficultySelect: PropTypes.bool,
  isQuest: PropTypes.bool
};

export default DifficultySelect;
