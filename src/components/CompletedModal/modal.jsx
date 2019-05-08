import React from 'react';
import PropTypes from 'prop-types';
import s from './CompletedModal.module.css';
import questCompleteIcon from '../../assets/images/questCompleteIcon.svg';
import challangeCompleteIcon from '../../assets/images/challangeCompleteIcon.svg';

const containerStyle = {
  position: 'absolute',
  zIndex: '999',
  boxSizing: 'border-box',
  margin: '0',
  padding: '22px',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  borderRadius: '11px',
  boxShadow: '0px 10px 20px 0px rgba(21, 57, 90, 0.15)',
  font: '400 15px HelveticaNeueCyrRoman, sans-serif'
};

const textStyle = {
  padding: '0',
  margin: '0',
  letterSpacing: '0.6px'
};

const modalCompleted = ({ completedText, clickContinue, isQuest }) => {
  return (
    <div
      style={{
        ...containerStyle,
        backgroundColor: isQuest ? '#fff' : '#15395a',
        backgroundImage: isQuest ? `url(${questCompleteIcon})` : `url(${challangeCompleteIcon})`,
        backgroundPositionY: '-10px',
        backgroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '90%'
      }}
    >
      <p
        style={{
          ...textStyle,
          color: isQuest ? '#282828' : '#fff'
        }}
      >
        COMPLETED: <span className={s.span}> {completedText}</span>
      </p>
      <button className={s.button} type="button" onClick={clickContinue}>
        Continue
      </button>
    </div>
  );
};

modalCompleted.propTypes = {
  isQuest: PropTypes.bool.isRequired,
  completedText: PropTypes.string,
  clickContinue: PropTypes.func
};

modalCompleted.defaultProps = {
  completedText: '',
  clickContinue: () => {}
};

export default modalCompleted;
