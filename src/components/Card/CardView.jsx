import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import s from './Card.module.css';
import CardSelect from '../CardSelect/CardSelect';
import CompletedModal from '../CompletedModal/CompletedModal';
import DeleteQuestModal from '../DeleteQuestModal/DeleteQuestModal';
import { DIFFICULTIES, GROUPS } from '../../projectConstantsAndVariables';
import CustomInput from './CustomInput/CustomInput';

// date picker
import 'react-datepicker/dist/react-datepicker.css';

// const arrDifficulties = ['Easy', 'Normal', 'Hard'];

// { name, difficulty, group, editMode, completeModal, deleteQuestModal, agreedDeleting }
/* group, difficulty, dueData, done, updatedAt, _id */

const GetDate = unixDate => {
  const date = new Date(unixDate);
  let result = '';
  result += `${date.getFullYear()}/`; // год
  result += `${date.getMonth() + 1}/`; // месяц, начиная с 0
  result += `${date.getDay() + 1}.`; // день , начиная с 0

  result += `  ${date.getHours()}:`; // часы
  result += `${date.getMinutes()}`; // минуты

  console.log(result);
  return result;
};

const CardView = ({
  _id,
  mode,
  isQuest,
  name,
  date,
  startDate,
  onChange,
  isStarActive,
  onStarClick,
  onSaveSelectedItem,
  onCreateCard,
  completeModal,
  deleteQuestModal,
  onHideCompletedModal,
  onAgreedDel,
  onCancelDel,
  showDelQuestModal,
  isSelectorDifficultiesOpen,
  difficulty,
  group,
  isSelectorGroupsOpen,
  onPickerSet,
  newQuest
}) => {
  if (mode === 'render') {
    if (isQuest) {
      // for render Quest by props
      return (
        <div className={s.card}>
          <CardSelect
            isGroup={false}
            isSelectorOpen={isSelectorDifficultiesOpen}
            isQuest={isQuest}
            onClick={onSaveSelectedItem}
            items={DIFFICULTIES}
            selected={difficulty}
          />
          <button
            className={isStarActive ? `${s.buttonStarActive}` : `${s.buttonStarNotActive}`}
            type="button"
            onClick={onStarClick}
          />
          <div className={s.box}>
            <h2 className={s.title}>{name}</h2>

            <p className={s.date}>{GetDate(date)}</p>
          </div>
          <div className={s.controlsContainer}>
            <CardSelect
              isGroup
              isSelectorOpen={isSelectorGroupsOpen}
              isQuest={isQuest}
              onClick={onSaveSelectedItem}
              items={GROUPS}
              selected={group}
            />
          </div>

          {completeModal && <CompletedModal onHideComplModal={onHideCompletedModal} />}
          {deleteQuestModal && (
            <DeleteQuestModal
              showDelQuestModal={showDelQuestModal}
              onCancelDel={onCancelDel}
              onAgreedDel={() => onAgreedDel(_id)}
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
          <p className={s.date}>{date}</p>
        </div>
      </div>
    );
  }
  // for create Quest
  if (mode === 'add') {
    if (isQuest) {
      return (
        <div className={`${s.card} ${s.addMode}`}>
          <CardSelect
            isGroup={false}
            isSelectorOpen={isSelectorDifficultiesOpen}
            isQuest={isQuest}
            onClick={onSaveSelectedItem}
            items={DIFFICULTIES}
            selected={difficulty}
          />

          <button
            className={isStarActive ? `${s.buttonStarActive}` : `${s.buttonStarNotActive}`}
            type="button"
            onClick={onStarClick}
          />
          <div className={s.box}>
            <h2 className={s.createTitle}>Create new quest</h2>
            <input className={s.nameInput} type="text" name="name" value={name} onChange={onChange} />
            <DatePicker
              selected={startDate}
              timeInputLabel="Time:"
              onChange={onPickerSet}
              showTimeInput
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              customInput={<CustomInput />}
            />
          </div>

          <div className={s.controlsContainer}>
            <CardSelect
              isGroup
              isSelectorOpen={isSelectorGroupsOpen}
              isQuest={isQuest}
              onClick={onSaveSelectedItem}
              items={GROUPS}
              selected={group}
            />
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
          </div>

          {completeModal && <CompletedModal onHideComplModal={onHideCompletedModal} newQuest={newQuest} />}
          {deleteQuestModal && <DeleteQuestModal onCancelDel={onCancelDel} onAgreedDel={() => onAgreedDel(_id)} />}
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
  date: PropTypes.number,
  onChange: PropTypes.func,
  isStarActive: PropTypes.bool,
  onStarClick: PropTypes.func,
  onSaveSelectedItem: PropTypes.func,
  onCreateCard: PropTypes.func,
  deleteQuestModal: PropTypes.bool,
  completeModal: PropTypes.bool,
  onHideCompletedModal: PropTypes.func,
  onAgreedDel: PropTypes.func,
  onCancelDel: PropTypes.func,
  showDelQuestModal: PropTypes.func,
  isSelectorDifficultiesOpen: PropTypes.bool,
  difficulty: PropTypes.string,
  group: PropTypes.string,
  isSelectorGroupsOpen: PropTypes.bool,
  onPickerSet: PropTypes.func,
  startDate: PropTypes.date,
  _id: PropTypes.string
};

CardView.defaultProps = {
  mode: '',
  isQuest: true,
  name: '',
  date: 0,
  onChange: () => null,
  isStarActive: false,
  onStarClick: () => null,
  onSaveSelectedItem: () => null,
  onCreateCard: () => null,
  deleteQuestModal: false,
  completeModal: false,
  onHideCompletedModal: () => null,
  onAgreedDel: () => null,
  onCancelDel: () => null,
  showDelQuestModal: () => null,
  isSelectorDifficultiesOpen: false,
  difficulty: '',
  isSelectorGroupsOpen: false,
  group: '',
  onPickerSet: () => null,
  startDate: new Date(),
  _id: ''
};

export default CardView;
