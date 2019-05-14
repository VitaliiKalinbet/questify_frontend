import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';
import lifecycle from 'react-pure-lifecycle';
import 'react-datetime/css/react-datetime.css';

import DeleteQuestModal from '../../../DeleteQuestModal/DeleteQuestModal';
import DifficultySelect from '../../../DifficultySelect/DifficultySelect';
import GroupSelect from '../../../GroupSelect/GroupSelect';
import s from './EditChallengeView.module.css';
import TpophySvg from '../../../../assets/images/trophy/TpophySvg';
import dropDownArrow from '../../../../assets/images/icons/drop-down-arrow.png';
import CalendarIcon from '../../../../assets/images/icons/calendarSvg/CalendarSvg';
import CloseSvg from '../../../../assets/images/icons/closeSvg/CloseSvg';
import SaveSvg from '../../../../assets/images/icons/saveSvg/SaveSvg';
import DoneSvg from '../../../../assets/images/icons/doneSvg/DoneSvg';
import CompletedModal from '../../../CompletedModal/CompletedModal';

const handleEnterDown = (event, props) => {
  if (event.keyCode === 13) {
    props.handleSaveQuest();
  }
  if (event.keyCode === 27) {
    props.toggleDeleteModal();
  }
};

const methods = {
  componentDidMount(props) {
    window.addEventListener('keydown', event => handleEnterDown(event, props));
  },
  componentWillUnmount() {
    window.removeEventListener('keydown', handleEnterDown);
  }
};

const PickerInput = (props, openCalendar, closeCalendar) => {
  console.log(props);
  function clear() {
    props.onChange({ target: { value: '' } });
  }
  return (
    <div>
      <input {...props} />
      <button onClick={openCalendar} className={s.pickerIcon}>
        <CalendarIcon className={s.calendarIcon} />
      </button>
    </div>
  );
};

const EditChallengeView = ({
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
  handleSaveQuest,
  toggleCompletedModal,
  isCompletedModalOpen,
  isQuest,
  onDelete,
  moveToDone,
  toggleIsOpenCalendar,
  isOpenCalendar
}) => {
  return (
    <div className={s.card} onClick={isOpenDifficultySelect ? toggleDifficultySelect : () => {}}>
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
        <h4 className={s.challangeTitle}>challenge</h4>
        <h2 className={s.title}>{name}</h2>
        <div className={s.dateTimeContainer}>
          <Datetime
            closeOnSelect
            dateFormat="DD.MM.YYYY"
            onChange={handleChangeDueDate}
            defaultValue={moment(dueDate)}
            open={isOpenCalendar}
            onFocus={toggleIsOpenCalendar}
            renderInput={PickerInput}
          />
        </div>
      </main>
      <footer className={s.cardFooter}>
        <div className={s.groupsContainer}>
          <GroupSelect group={group} />
        </div>
        <div className={s.toolsContainer}>
          <SaveSvg className={s.saveSvg} onClick={handleSaveQuest} />
          <div className={s.strip} />
          <CloseSvg className={s.closeSvg} onClick={toggleDeleteModal} />
          <div className={s.strip} />
          <DoneSvg className={s.doneSvg} onClick={toggleCompletedModal} />
        </div>
      </footer>

      {isDeleteModalOpen && <DeleteQuestModal isQuest={isQuest} onDelete={onDelete} onCancelDel={toggleDeleteModal} />}
      {isCompletedModalOpen && <CompletedModal isQuest={isQuest} moveToDone={moveToDone} name={name} />}
    </div>
  );
};

EditChallengeView.propTypes = {
  isOpenCalendar: PropTypes.bool.isRequired,
  toggleIsOpenCalendar: PropTypes.func.isRequired,
  isQuest: PropTypes.bool.isRequired,
  isCompletedModalOpen: PropTypes.bool.isRequired,
  toggleCompletedModal: PropTypes.func.isRequired,
  handleSaveQuest: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
  handleSaveSelectedDifficutlyItem: PropTypes.func.isRequired,
  handleChangeDueDate: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default lifecycle(methods)(EditChallengeView);
