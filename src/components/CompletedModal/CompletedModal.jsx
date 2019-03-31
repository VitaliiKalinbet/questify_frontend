import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './modal';

class CompletedModal extends Component {
  clickContinue = () => {
    return console.log('click continue');
  };

  sliceTextCompleted = text => {
    return text.length > 20 ? `${text.slice(0, 20)}...` : text;
  };

  render() {
    const { onHideComplModal } = this.props;
    return (
      <Modal clickContinue={onHideComplModal} completedText={this.sliceTextCompleted('tetetetetet tetetet etetet')} />
    );
  }
}

CompletedModal.propTypes = {
  onHideComplModal: PropTypes.func
};

CompletedModal.defaultProps = {
  onHideComplModal: () => null
};

export default connect()(CompletedModal);
