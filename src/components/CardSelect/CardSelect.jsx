/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import s from './CardSelect.module.css';

const CardSelect = ({ items, isGroup, selected, onClick, isQuest, isSelectorOpen }) => {
  let styles = null;
  if (isGroup) {
    styles = {
      Stuff: {
        'box-shadow': '-10px 0px 0px 0px #eceff1',
        'background-color': '#eceff1'
      },
      Learning: {
        'box-shadow': '-10px 0px 0px 0px #fcf2b7',
        'background-color': '#fcf2b7'
      },
      Health: {
        'box-shadow': '-10px 0px 0px 0px #ccf7ff',
        'background-color': '#ccf7ff'
      },
      Work: {
        'box-shadow': '-10px 0px 0px 0px #d3f6ce',
        'background-color': '#d3f6ce'
      },
      Leisure: {
        'box-shadow': '-10px 0px 0px 0px #eed8f2',
        'background-color': '#eed8f2'
      },
      Productivity: {
        'box-shadow': '-10px 0px 0px 0px #d1e1f6',
        'background-color': '#d1e1f6'
      },
      Social: {
        'box-shadow': '-10px 0px 0px 0px #e9c0cb',
        'background-color': '#e9c0cb'
      },
      Sport: {
        'box-shadow': '-10px 0px 0px 0px #baf1e5',
        'background-color': '#baf1e5'
      }
    };
  }

  return isSelectorOpen ? (
    <div className={isGroup ? `${s.groupsOpen}` : `${s.difficultiesOpen}`}>
      <ul className={isQuest ? `${s.quest} ${s.selectList}` : `${s.challenge} ${s.selectList}`}>
        {items.length > 0 ? (
          items.map(item => (
            <li className={!isGroup ? `${s.difficulties} ${s[item]}` : `${s.groups}`} key={item}>
              <a
                className={item === selected ? `${s.previouslySelected}` : undefined}
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
    </div>
  ) : (
    <a
      style={styles ? styles[selected] : null}
      className={
        isGroup
          ? `${s.previouslySelected} ${s[selected]} ${s.groupClosed}`
          : `${s.previouslySelected} ${s.difficultyLink} ${s[selected]} ${s.difficultyClosed}`
      }
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
