import React from 'react';
import PropTypes from 'prop-types';
import s from './GroupSelect.module.css';

const GroupSelect = ({ group, isOpenGroupSelect }) => {
  const styles = {
    Stuff: {
      boxShadow: '-23px 0px 0px 0px #eceff1',
      backgroundColor: '#eceff1'
    },
    Learning: {
      boxShadow: '-23px 0px 0px 0px #fcf2b7',
      backgroundColor: '#fcf2b7'
    },
    Health: {
      boxShadow: '-23px 0px 0px 0px #ccf7ff',
      backgroundColor: '#ccf7ff'
    },
    Work: {
      boxShadow: '-23px 0px 0px 0px #d3f6ce',
      backgroundColor: '#d3f6ce'
    },
    Leisure: {
      boxShadow: '-23px 0px 0px 0px #eed8f2',
      backgroundColor: '#eed8f2'
    },
    Productivity: {
      boxShadow: '-23px 0px 0px 0px #d1e1f6',
      backgroundColor: '#d1e1f6'
    },
    Social: {
      boxShadow: '-23px 0px 0px 0px #e9c0cb',
      backgroundColor: '#e9c0cb'
    },
    Sport: {
      boxShadow: '-23px 0px 0px 0px #baf1e5',
      backgroundColor: '#baf1e5'
    }
  };

  if (isOpenGroupSelect)
    return (
      <ul className={s.list}>
        <li className={s.listItem}>Easy</li>
        <li className={s.listItem}>Normal</li>
        <li className={s.listItem}>Hard</li>
      </ul>
    );

  return (
    <div style={styles[group]} className={s.groupContainer}>
      {group}
    </div>
  );
};

GroupSelect.defaultProps = {
  isOpenGroupSelect: false
};

GroupSelect.propTypes = {
  group: PropTypes.string.isRequired,
  isOpenGroupSelect: PropTypes.bool
};

export default GroupSelect;
