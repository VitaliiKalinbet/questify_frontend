import React from 'react';
import PropTypes from 'prop-types';
import s from './Card.module.css';
import CardSelect from '../CardSelect/CardSelect';
import CompletedModal from '../CompletedModal/CompletedModal';
import DeleteQuestModal from '../DeleteQuestModal/DeleteQuestModal';

const arrDifficulties = ['Easy', 'Normal', 'Hard'];

// { name, difficulty, group, editMode, completeModal, deleteQuestModal, agreedDeleting }
/* group, difficulty, dueData, done, updatedAt, _id */

const CardView = ({
  mode,
  isQuest,
  name,
  createdAt,
  onChange,
  isStarActive,
  onStarClick,
  onSaveSelectedItemDifficulties,
  onCreateCard,
  completeModal,
  deleteQuestModal,
  onHideCompletedModal,
  onAgreedDel,
  onCancelDel,
  showDelQuestModal
}) => {
  if (mode === 'render') {
    if (isQuest) {
      // for render Quest by props
      return (
        <div className={s.card}>
          <button
            className={isStarActive ? `${s.buttonStarActive}` : `${s.buttonStarNotActive}`}
            type="button"
            onClick={onStarClick}
          />
          <div className={s.box}>
            <h2 className={s.title}>{name}</h2>
            <p className={s.date}>{createdAt}</p>
          </div>
          {/* <button className={s.btnEdit} type="button" />
          <button className={s.btnDelete} type="button" />
          <button className={s.btnComplete} type="button" />
          <button className={s.btnStart} type="button">
            Start
          </button> */}
          {completeModal && <CompletedModal onHideComplModal={onHideCompletedModal} />}
          {deleteQuestModal && (
            <DeleteQuestModal
              showDelQuestModal={showDelQuestModal}
              onCancelDel={onCancelDel}
              onAgreedDel={onAgreedDel}
            />
          )}
        </div>
      );
    }
    // for render Challenge by props
    return (
      <div className={s.card}>
        <div className={s.box}>
          <h2 className={s.title}>{name}</h2>
          <p className={s.date}>{createdAt}</p>
        </div>
      </div>
    );
  }
  // for create Quest
  if (mode === 'add') {
    if (isQuest) {
      return (
        <div className={s.card}>
          <CardSelect
            isQuest={isQuest}
            onClick={onSaveSelectedItemDifficulties}
            items={arrDifficulties}
            selected="Normal"
          />
          <button
            className={isStarActive ? `${s.buttonStarActive}` : `${s.buttonStarNotActive}`}
            type="button"
            onClick={onStarClick}
          />
          <div className={s.box}>
            <h2 className={s.createTitle}>Create new quest</h2>
            <input className={s.nameInput} type="text" name="name" value={name} onChange={onChange} />
            <p className={s.date}>{createdAt}</p>
          </div>
          <ul className={s.btnList}>
            <li className={s.btnItem}>
              <button className={s.btnDelete} onClick={showDelQuestModal} type="button" />
            </li>
            <li className={s.btnItem}>
              <button className={s.btnStart} onClick={onCreateCard} type="button">
                Start
              </button>
            </li>
          </ul>
          {completeModal && <CompletedModal onHideComplModal={onHideCompletedModal} />}
          {deleteQuestModal && <DeleteQuestModal onCancelDel={onCancelDel} onAgreedDel={onAgreedDel} />}
        </div>
      );
    }
  }
  return null;
};

CardView.propTypes = {
  mode: PropTypes.string,
  isQuest: PropTypes.bool,
  name: PropTypes.string,
  createdAt: PropTypes.string,
  onChange: PropTypes.func,
  isStarActive: PropTypes.bool,
  onStarClick: PropTypes.func,
  onSaveSelectedItemDifficulties: PropTypes.func,
  onCreateCard: PropTypes.func,
  deleteQuestModal: PropTypes.bool,
  completeModal: PropTypes.bool,
  onHideCompletedModal: PropTypes.func,
  onAgreedDel: PropTypes.func,
  onCancelDel: PropTypes.func,
  showDelQuestModal: PropTypes.func
};

CardView.defaultProps = {
  mode: '',
  isQuest: true,
  name: '',
  createdAt: '',
  onChange: () => null,
  isStarActive: false,
  onStarClick: () => null,
  onSaveSelectedItemDifficulties: () => null,
  onCreateCard: () => null,
  deleteQuestModal: false,
  completeModal: false,
  onHideCompletedModal: () => null,
  onAgreedDel: () => null,
  onCancelDel: () => null,
  showDelQuestModal: () => null
};

export default CardView;
