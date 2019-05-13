import React, { Component } from 'react';
import Modal from './modalDelete';

class DeleteQuestModal extends Component {
  render() {
    const { onCancelDel, onDelete, isQuest } = this.props;
    return <Modal isQuest={isQuest} clickCancel={onCancelDel} onDelete={onDelete} />;
  }
}

export default DeleteQuestModal;
