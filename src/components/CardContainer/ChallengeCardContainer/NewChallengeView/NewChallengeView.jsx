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
  handleAddChallange,
  onResetSelectors,
  togleOpenCalendar,
  isCalendarOpen
}) => {
  return (
    <li className={s.card} onClick={onResetSelectors}>
      <div className={s.cardHeader}>
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
      </div>
      <div className={s.cardMain}>
        <h4 className={s.challangeTitle}>challange</h4>
        <h2 className={s.title}>{name}</h2>
        <div className={s.dateTimeContainer}>
          <Datetime
            onFocus={togleOpenCalendar}
            closeOnSelect
            open={isCalendarOpen}
            dateFormat="DD.MM.YYYY"
            onChange={handleChangeDueDate}
            defaultValue={moment(dueDate)}
          />
          <button className={s.calendarIconBtn} onClick={togleOpenCalendar} type="button">
            <CalendarIcon className={s.calendarIcon} />
          </button>
        </div>
      </div>
      <div className={s.cardFooter}>
        <div className={s.groupsContainer}>
          <GroupSelect group={group} />
          {/* {group} */}
        </div>
        <div className={s.toolsContainer}>
          <CloseSvg className={s.closeSvg} onClick={toggleDeleteModal} />
          <div className={s.strip} />
          <button className={s.start} type="button" onClick={handleAddChallange}>
            start
          </button>
        </div>
      </div>

      {isDeleteModalOpen && <DeleteQuestModal onDelete={onDelete} onCancelDel={toggleDeleteModal} />}
    </li>
  );
};

NewChallengeView.defaultProps = {
  difficulty: 'Easy',
  group: 'STUFF',
  isQuest: true
};

NewChallengeView.propTypes = {
  handleAddChallange: PropTypes.func.isRequired,
  isQuest: PropTypes.bool,
  toggleDeleteModal: PropTypes.func.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
  handleSaveSelectedDifficutlyItem: PropTypes.func.isRequired,
  handleChangeDueDate: PropTypes.func.isRequired,
  difficulty: PropTypes.string,
  dueDate: PropTypes.string,
  group: PropTypes.string,
  name: PropTypes.string
};

export default NewChallengeView;
