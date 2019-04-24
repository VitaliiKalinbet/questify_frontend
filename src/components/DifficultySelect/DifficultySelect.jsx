import React from 'react';
import PropTypes from 'prop-types';
import s from './DifficultySelect.module.css';

const DifficultySelect = ({ difficulty, isOpenDifficultySelect, handleSaveSelectedDifficutlyItem }) => {
  if (isOpenDifficultySelect)
    return (
      <ul className={s.list}>
        <li
          className={difficulty === 'Easy' ? `${s.listItem} ${s.select}` : s.listItem}
          onClick={() => handleSaveSelectedDifficutlyItem('Easy')}
        >
          Easy
        </li>
        <li
          className={difficulty === 'Normal' ? `${s.listItem} ${s.select}` : s.listItem}
          onClick={() => handleSaveSelectedDifficutlyItem('Normal')}
        >
          Normal
        </li>
        <li
          className={difficulty === 'Hard' ? `${s.listItem} ${s.select}` : s.listItem}
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
  handleSaveSelectedDifficutlyItem: () => {}
};

DifficultySelect.propTypes = {
  handleSaveSelectedDifficutlyItem: PropTypes.func,
  difficulty: PropTypes.string,
  isOpenDifficultySelect: PropTypes.bool
};

export default DifficultySelect;
