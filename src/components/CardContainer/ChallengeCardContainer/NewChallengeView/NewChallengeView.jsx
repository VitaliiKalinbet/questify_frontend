import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import DeleteQuestModal from '../../../DeleteQuestModal/DeleteQuestModal';
import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './NewChallengeView.module.css';
import TpophySvg from '../../../../assets/images/trophy/TpophySvg';
import dropDownArrow from '../../../../assets/images/icons/drop-down-arrow.png';
import CalendarIcon from '../../../../assets/images/icons/calendarSvg/CalendarSvg';
import CloseSvg from '../../../../assets/images/icons/closeSvg/CloseSvg';

const NewChallengeView = ({
  isDeleteModalOpen,
  toggleDeleteModal,
  difficulty,
  dueDate,
  group,
  name,
  toggleDifficultySelect,
  isOpenDifficultySelect,
  handleChangeDueDate,
  handleSaveSelectedDifficutlyItem,
  isQuest,
  onDelete,
  onModeRender
}) => {
  return (
    <div className={s.card}>
      <header className={s.cardHeader}>
        <div className={s.difficultySelect_container} onClick={toggleDifficultySelect}>
          <DifficultySelect
            isQuest={isQuest}
            handleSaveSelectedDifficutlyItem={handleSaveSelectedDifficutlyItem}
            isOpenDifficultySelect={isOpenDifficultySelect}
            difficulty={difficulty}
          />
          <img className={s.dropDownArrow} src={dropDownArrow} alt="dropDownArrow" />
        </div>
        <div className={s.starContainer}>
          <TpophySvg className={s.trophy} />
        </div>
      </header>
      <main className={s.cardMain}>
        <h4 className={s.challangeTitle}>challange</h4>
        <h2 className={s.title}>{name}</h2>
        <div className={s.dateTimeContainer}>
          <Datetime
            closeOnSelect
            dateFormat="DD.MM.YYYY"
            onChange={handleChangeDueDate}
            defaultValue={moment(dueDate)}
          />
          <CalendarIcon className={s.calendarIcon} />
        </div>
      </main>
      <footer className={s.cardFooter}>
        <div className={s.groupsContainer}>
          <GroupSelect group={group} />
          {/* {group} */}
        </div>
        <div className={s.toolsContainer}>
          <CloseSvg className={s.closeSvg} onClick={toggleDeleteModal} />
          <div className={s.strip} />
          <p className={s.start} onClick={onModeRender}>
            start
          </p>
        </div>
      </footer>

      {isDeleteModalOpen && <DeleteQuestModal onDelete={onDelete} onCancelDel={toggleDeleteModal} />}
    </div>
  );
};

NewChallengeView.propTypes = {
  onModeRender: PropTypes.bool.isRequired,
  isQuest: PropTypes.bool.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
  handleSaveSelectedDifficutlyItem: PropTypes.func.isRequired,
  handleChangeDueDate: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default NewChallengeView;
