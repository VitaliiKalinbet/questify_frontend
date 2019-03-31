import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from './modalDelet';

class DeleteQuestModal extends Component {
  clickDelete = () => {
    console.log('click delete');
  };

  clickCancel = () => {
    console.log('click cancel');
  };

  render() {
    const { onCancelDel, onAgreedDel } = this.props;
    return <Modal clickCancel={onCancelDel} clickDelete={onAgreedDel} {...this.props} />;
  }
}

DeleteQuestModal.propTypes = {
  onCancelDel: PropTypes.func,
  onAgreedDel: PropTypes.func
};

DeleteQuestModal.defaultProps = {
  onCancelDel: () => null,
  onAgreedDel: () => null
};

export default DeleteQuestModal;
