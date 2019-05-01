import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './modal';
import { finishAddMode } from '../../redux/createQuest/createQuestReducer';

const sliceTextCompleted = text => {
  return text.length > 20 ? `${text.slice(0, 20)}...` : text;
};

// const CompletedModal = (finishAddMode, name, moveToDone) => {
const CompletedModal = ({ finishAddMode, moveToDone, name }) => {
  return (
    <Modal
      clickContinue={() => {
        finishAddMode(), moveToDone();
      }}
      completedText={sliceTextCompleted(name)}
    />
  );
};

CompletedModal.propTypes = {
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
