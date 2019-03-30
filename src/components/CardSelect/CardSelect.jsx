/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import s from './CardSelect.module.css';

const CardSelect = ({ items, isGroup, selected, onClick, isQuest, isSelectorOpen }) => {
  return isSelectorOpen ? (
    <ul className={isQuest ? `${s.quest} ${s.selectList}` : `${s.challenge} ${s.selectList}`}>
      {items.length > 0 ? (
        items.map(item => (
          <li className={!isGroup ? `${s.difficulties} ${s[item]}` : `${s.groups}`} key={item}>
            <a
              className={item === selected ? `${s.previouslySelected}}` : undefined}
              onClick={() => onClick(item, isGroup)}
            >
              {item}
            </a>
          </li>
        ))
      ) : (
        <span>There is something wrong with a backend</span>
      )}
    </ul>
  ) : (
    <a
      className={`${s.previouslySelected} ${s.difficultyLink} ${s[selected]}`}
      onClick={() => onClick(selected, isGroup)}
    >
      {selected}
    </a>
  );
};

CardSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  isGroup: PropTypes.bool.isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isQuest: PropTypes.bool.isRequired,
  isSelectorOpen: PropTypes.bool.isRequired
};

export default CardSelect;
