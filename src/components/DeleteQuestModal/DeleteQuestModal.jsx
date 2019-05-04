import React from 'react';
import PropTypes from 'prop-types';

import Modal from './modalDelete';

const DeleteQuestModal = ({ onCancelDel, onDelete }) => <Modal clickCancel={onCancelDel} onDelete={onDelete} />;

DeleteQuestModal.propTypes = {
  onCancelDel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default DeleteQuestModal;
