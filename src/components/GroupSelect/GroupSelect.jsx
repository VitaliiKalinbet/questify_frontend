import React from 'react';
import PropTypes from 'prop-types';
import s from './GroupSelect.module.css';

const GroupSelect = ({ group, isOpenGroupSelect, handleSaveSelectedGroupItem }) => {
  const styles = {
    Stuff: {
      boxShadow: '-22px 0px 0px 0px #eceff1',
      backgroundColor: '#eceff1'
    },
    Learning: {
      boxShadow: '-22px 0px 0px 0px #fcf2b7',
      backgroundColor: '#fcf2b7'
    },
    Health: {
      boxShadow: '-22px 0px 0px 0px #ccf7ff',
      backgroundColor: '#ccf7ff'
    },
    Work: {
      boxShadow: '-22px 0px 0px 0px #d3f6ce',
      backgroundColor: '#d3f6ce'
    },
    Leisure: {
      boxShadow: '-22px 0px 0px 0px #eed8f2',
      backgroundColor: '#eed8f2'
    },
    Productivity: {
      boxShadow: '-22px 0px 0px 0px #d1e1f6',
      backgroundColor: '#d1e1f6'
    },
    Social: {
      boxShadow: '-22px 0px 0px 0px #e9c0cb',
      backgroundColor: '#e9c0cb'
    },
    Sport: {
      boxShadow: '-22px 0px 0px 0px #baf1e5',
      backgroundColor: '#baf1e5'
    }
  };

  return (
    <div style={styles[group]} className={s.groupContainer}>
      {group}

      {isOpenGroupSelect && (
        <ul className={s.list}>
          <li
            className={group === 'Stuff' ? `${s.listItem} ${s.select}` : s.listItem}
            onClick={() => handleSaveSelectedGroupItem('Stuff')}
          >
            Stuff
          </li>
          <li
            className={group === 'Learning' ? `${s.listItem} ${s.select}` : s.listItem}
            onClick={() => handleSaveSelectedGroupItem('Learning')}
          >
            Learning
          </li>
          <li
            className={group === 'Health' ? `${s.listItem} ${s.select}` : s.listItem}
            onClick={() => handleSaveSelectedGroupItem('Health')}
          >
            Health
          </li>
          <li
            className={group === 'Work' ? `${s.listItem} ${s.select}` : s.listItem}
            onClick={() => handleSaveSelectedGroupItem('Work')}
          >
            Work
          </li>
          <li
            className={group === 'Leisure' ? `${s.listItem} ${s.select}` : s.listItem}
            onClick={() => handleSaveSelectedGroupItem('Leisure')}
          >
            Leisure
          </li>
          <li
            className={group === 'Productivity' ? `${s.listItem} ${s.select}` : s.listItem}
            onClick={() => handleSaveSelectedGroupItem('Productivity')}
          >
            Productivity
          </li>
          <li
            className={group === 'Social' ? `${s.listItem} ${s.select}` : s.listItem}
            onClick={() => handleSaveSelectedGroupItem('Social')}
          >
            Social
          </li>
          <li
            className={group === 'Sport' ? `${s.listItem} ${s.select}` : s.listItem}
            onClick={() => handleSaveSelectedGroupItem('Sport')}
          >
            Sport
          </li>
        </ul>
      )}
    </div>
  );
};

GroupSelect.defaultProps = {
  isOpenGroupSelect: false,
  handleSaveSelectedGroupItem: () => {}
};

GroupSelect.propTypes = {
  group: PropTypes.string.isRequired,
  isOpenGroupSelect: PropTypes.bool,
  handleSaveSelectedGroupItem: PropTypes.func
};

export default GroupSelect;
