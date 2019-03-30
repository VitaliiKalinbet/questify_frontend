/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import s from './CardSelect.module.css';

const CardSelect = ({ items, groups, selected, onClick, isQuest }) => {
  return (
    <ul className={isQuest ? `${s.quest}` : `${s.challenge}`}>
      {items.length > 0 ? (
        items.map(item => (
          <li className={!groups ? `${s.difficulties}` : `${s.groups}`} key={item}>
            <a className={item === selected ? `${s.previouslySelected}` : undefined} onClick={onClick}>
              {item}
            </a>
          </li>
        ))
      ) : (
        <span>There is something wrong with a backend</span>
      )}
    </ul>
  );
};

CardSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  groups: PropTypes.bool.isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isQuest: PropTypes.bool.isRequired
};

export default CardSelect;
