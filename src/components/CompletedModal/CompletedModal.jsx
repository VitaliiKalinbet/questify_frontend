import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './modal';
import { addQuest } from '../../redux/user/userAction';
import { finishAddMode } from '../../redux/createQuest/createQuestReducer';

class CompletedModal extends Component {
  clickContinue = () => {
    const {addQuest, newQuest, finishAddMode} = this.props;
    addQuest(newQuest);
    finishAddMode();
  };

  sliceTextCompleted = text => {
    return text.length > 20 ? `${text.slice(0, 20)}...` : text;
  };

  render() {
    const { onHideComplModal } = this.props;
    return (
      <Modal clickContinue={this.clickContinue} completedText={this.sliceTextCompleted('tetetetetet tetetet etetet')} />
    );
  }
}

CompletedModal.propTypes = {
  onHideComplModal: PropTypes.func
};

CompletedModal.defaultProps = {
  onHideComplModal: () => null
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuest: (newTask) => dispatch(addQuest(newTask)),
    finishAddMode: () => dispatch(finishAddMode())
  }
};

export default connect(null, mapDispatchToProps)(CompletedModal);
