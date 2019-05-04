import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import DeleteQuestModal from '../../../DeleteQuestModal/DeleteQuestModal';
import CompletedModal from '../../../CompletedModal/CompletedModal';
import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './EditQuestView.module.css';
import activeStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-active.svg';
import notActiveStar from '../../../../assets/images/icons/star/favourites-filled-star-symbol-not-active.svg';
import dropDownArrow from '../../../../assets/images/icons/drop-down-arrow.png';
import CalendarIcon from '../../../../assets/images/icons/calendarSvg/CalendarSvg';
import SaveSvg from '../../../../assets/images/icons/saveSvg/SaveSvg';
import CloseSvg from '../../../../assets/images/icons/closeSvg/CloseSvg';
import DoneSvg from '../../../../assets/images/icons/doneSvg/DoneSvg';

const EditQuestView = ({
  difficulty,
  dueDate,
  group,
  toggleIsPriority,
  isPriority,
  name,
  isQuest,
  toggleDifficultySelect,
  isOpenDifficultySelect,
  toggleOpenGroupSelect,
  isOpenGroupSelect,
  handelChangeNameQuest,
  handleChangeDueDate,
  handleSaveSelectedDifficutlyItem,
  handleSaveSelectedGroupItem,
  isDeleteModalOpen,
  toggleDeleteModal,
  isCompletedModalOpen,
  toggleCompletedModal,
  onSave,
  onDelete,
  moveToDone
}) => {
  return (
    <li className={s.card}>
      <div className={s.cardHeader}>
        <div className={s.difficultySelect_container} onClick={toggleDifficultySelect}>
          <DifficultySelect
            handleSaveSelectedDifficutlyItem={handleSaveSelectedDifficutlyItem}
            isOpenDifficultySelect={isOpenDifficultySelect}
            difficulty={difficulty}
          />
          <img className={s.dropDownArrow} src={dropDownArrow} alt="dropDownArrow" />
        </div>
        <div className={s.starContainer} onClick={toggleIsPriority}>
          <img className={s.star} src={isPriority ? activeStar : notActiveStar} alt="star" />
        </div>
      </div>
      <div className={s.cardMain}>
        <input
          autoFocus
          className={s.title}
          onChange={handelChangeNameQuest}
          value={name}
          placeholder="You may change quest name"
        />
        <div className={s.dateTimeContainer}>
          <Datetime
            closeOnSelect
            dateFormat="DD.MM.YYYY"
            onChange={handleChangeDueDate}
            defaultValue={moment(dueDate)} // for test
            // defaultValue={dueDate}
          />
          <CalendarIcon className={s.calendarIcon} />
        </div>
      </div>
      <div className={s.cardFooter}>
        <div className={s.groupsContainer} onClick={toggleOpenGroupSelect}>
          <img className={s.ArrowForGroupSelect} src={dropDownArrow} alt="dropDownArrow" />
          <GroupSelect
            handleSaveSelectedGroupItem={handleSaveSelectedGroupItem}
            isOpenGroupSelect={isOpenGroupSelect}
            group={group}
          />
        </div>
        <div className={s.toolsContainer}>
          <SaveSvg className={s.saveSvg} onClick={onSave} />
          <div className={s.strip} />
          <CloseSvg className={s.closeSvg} onClick={toggleDeleteModal} />
          <div className={s.strip} />
          <DoneSvg className={s.doneSvg} onClick={toggleCompletedModal} />
        </div>
      </div>

      {isDeleteModalOpen && <DeleteQuestModal onDelete={onDelete} onCancelDel={toggleDeleteModal} />}
      {isCompletedModalOpen && <CompletedModal name={name} moveToDone={moveToDone} />}
    </li>
  );
};

EditQuestView.propTypes = {
  toggleCompletedModal: PropTypes.func.isRequired,
  isCompletedModalOpen: PropTypes.bool.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
  handleSaveSelectedGroupItem: PropTypes.func.isRequired,
  handleSaveSelectedDifficutlyItem: PropTypes.func.isRequired,
  handleChangeDueDate: PropTypes.func.isRequired,
  handelChangeNameQuest: PropTypes.func.isRequired,
  isOpenGroupSelect: PropTypes.bool.isRequired,
  toggleOpenGroupSelect: PropTypes.func.isRequired,
  toggleIsPriority: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  isPriority: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default EditQuestView;
