import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './modal';

class CompletedModal extends Component {
  clickContinue = () => {
    return console.log('click continue');
  };

  sliceTextCompleted = text => {
    return text.length > 20 ? `${text.slice(0, 20)}...` : text;
  };

  render() {
    return (
      <Modal
        clickContinue={() => this.clickContinue()}
        completedText={this.sliceTextCompleted('tetetetetet tetetet etetet')}
      />
    );
  }
}

export default connect()(CompletedModal);
