import React from 'react';
import PropTypes from 'prop-types';

import s from './DeleteQuestModal.module.css';

const Modal = ({ clickDelete, clickCancel }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.body}>
        <p className={s.text}>Delete this Quest?</p>
        <button className={s.buttonCancel} type="button" onClick={() => clickCancel()}>
          cancel
        </button>
        <button className={s.buttonDelete} type="button" onClick={() => clickDelete()}>
          delete
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  clickDelete: PropTypes.func,
  clickCancel: PropTypes.func
};

Modal.defaultProps = {
  clickDelete: () => {},
  clickCancel: () => {}
};

export default Modal;
