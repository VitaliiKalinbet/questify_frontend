import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from './modalDelete';

class DeleteQuestModal extends Component {
  // clickDelete = () => {
  //   console.log('click delete');
  // };

  // clickCancel = () => {
  //   console.log('click cancel');
  // };

  render() {
    // const { onCancelDel, onAgreedDel, onDelete } = this.props;
    const { onCancelDel, onDelete } = this.props;
    return <Modal clickCancel={onCancelDel} onDelete={onDelete} />;
  }
}

DeleteQuestModal.propTypes = {
  // onCancelDel: PropTypes.func,
  // onAgreedDel: PropTypes.func
};

DeleteQuestModal.defaultProps = {
  // onCancelDel: () => null,
  // onAgreedDel: () => null
};

export default DeleteQuestModal;
