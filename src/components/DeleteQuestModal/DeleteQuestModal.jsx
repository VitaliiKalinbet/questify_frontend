import React, { Component } from 'react';

import Modal from './modalDelet';

class DeleteQuestModal extends Component {
  clickDelete = () => {
    console.log('click delete');
  };

  clickCancel = () => {
    console.log('click cancel');
  };

  render() {
    return <Modal clickCancel={this.clickCancel} clickDelete={this.clickDelete} {...this.props} />;
  }
}

export default DeleteQuestModal;
