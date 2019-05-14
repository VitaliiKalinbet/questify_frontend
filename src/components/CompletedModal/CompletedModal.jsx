import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './modal';
import { finishAddMode } from '../../redux/createQuest/createQuestReducer';

const sliceTextCompleted = text => {
  return text.length > 14 ? `${text.slice(0, 14)}...` : text;
};

const CompletedModal = ({ finishAddMode, moveToDone, name, isQuest }) => {
  return (
    <Modal
      clickContinue={() => {
        finishAddMode(), moveToDone();
      }}
      completedText={sliceTextCompleted(name)}
      isQuest={isQuest}
    />
  );
};

CompletedModal.propTypes = {
  isQuest: PropTypes.bool.isRequired,
  finishAddMode: PropTypes.func
};

CompletedModal.defaultProps = {
  finishAddMode: () => null
};

const mapDispatchToProps = dispatch => {
  return {
    finishAddMode: () => dispatch(finishAddMode())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CompletedModal);
