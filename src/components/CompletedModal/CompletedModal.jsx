import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './modal';
import { finishAddMode } from '../../redux/createQuest/createQuestReducer';

const sliceTextCompleted = text => {
  return text.length > 20 ? `${text.slice(0, 20)}...` : text;
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
  finishAddMode: PropTypes.func.isRequired,
  isQuest: PropTypes.bool,
  moveToDone: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

CompletedModal.defaultProps = {
  isQuest: true
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
