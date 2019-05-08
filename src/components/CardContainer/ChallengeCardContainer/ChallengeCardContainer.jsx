import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import ChallengeView from './ChallengeView/ChallengeView';
import EditChallengeView from './EditChallengeView/EditChallengeView';
import NewChallengeView from './NewChallengeView/NewChallengeView';
import { saveQuest, deleteQuest, moveToDone } from '../../../redux/user/userAction';
import userSelectors from '../../../redux/user/userSelectors';
import { newChallenge } from '../../../redux/challenge/challengeAction';
import { startEditMode } from '../../../redux/editMode/editModeAction';

const getFireIconOn = (time, nowDate) =>
  new Date(time).getDay() < nowDate.getDay() &&
  new Date(time).getMonth() <= nowDate.getMonth() &&
  new Date(time).getFullYear() <= nowDate.getFullYear();

class ChallengeCardContainer extends Component {
  state = {
    updatedFields: {},
    mode: this.props.task.challengeSendToUser ? this.props.mode : 'newChallenge',
    difficulty: this.props.task.difficulty,
    dueDate: this.props.task.dueDate,
    done: this.props.task.done,
    group: this.props.task.group,
    name: this.props.task.name,
    isQuest: this.props.task.isQuest,
    isOpenDifficultySelect: false,
    isDeleteModalOpen: false,
    isCompletedModalOpen: false,
    challengeSendToUser: this.props.task.challengeSendToUser,
    isFireIconOn: false,
    isOpenCalendar: false
  };

  componentDidMount() {
    const { challengeSendToUser, dueDate } = this.state;
    if (challengeSendToUser) {
      this.setState({
        mode: 'render'
      });
    }

    this.setState({
      isFireIconOn: getFireIconOn(dueDate, new Date())
    });
  }

  toggleIsOpenCalendar = () => {
    this.setState(prevState => ({
      isOpenCalendar: !prevState.isOpenCalendar
    }));
  };

  toggleDifficultySelect = () => {
    this.setState(prevState => ({
      isOpenDifficultySelect: !prevState.isOpenDifficultySelect
    }));
  };

  onModeEdit = () => {
    const { isEditMode, startEditMode } = this.props;
    if (!isEditMode) {
      this.setState(
        {
          mode: 'edit'
        },
        () => startEditMode(true)
      );
    }
  };

  onModeRender = () => {
    const {startEditMode} = this.props;
    this.setState(
      {
        mode: 'render'
      }
    );
  };

  handleChangeDueDate = event => {
    const changedDate = moment(event._d).format('YYYY-MM-DDTHH:mm:ss.sssZ');
    this.setState(prevState => ({
      isFireIconOn: getFireIconOn(changedDate, new Date()),
      dueDate: changedDate,
      updatedFields: { ...prevState.updatedFields, dueDate: changedDate }
    }));
  };

  handleSaveSelectedDifficutlyItem = difficultValue => {
    this.setState(
      prevState => ({
        difficulty: difficultValue,
        updatedFields: { ...prevState.updatedFields, difficulty: difficultValue }
      }),
      () => {
        this.toggleDifficultySelect();
      }
    );
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalOpen: !prevState.isDeleteModalOpen
    }));
  };

  toggleCompletedModal = () => {
    this.setState(prevState => ({
      isCompletedModalOpen: !prevState.isCompletedModalOpen
    }));
  };

  handleReturnOldAndNewQuest = () => {
    const { updatedFields } = this.state;
    const questFromProp = this.props.task;
    return { questFromProp, updatedFields };
  };

  handleDeleteQuest = () => {
    const {
      task: { _id: id, dueDate, isQuest, challengeSendToUser, done },
      deleteQuest,
      userId,
      startEditMode
    } = this.props;
    startEditMode(false);
    deleteQuest({ deleteQuest: { id, dueDate, isQuest }, userId });
  };

  handleDoneQuest = () => {
    this.setState({ mode: 'render' }, () => {
      const { moveToDone, userId } = this.props;
      const { questFromProp, newQuest } = this.handleReturnOldAndNewQuest();
      const doneChallenge = { ...questFromProp, ...newQuest };
      console.log(userId);
      this.onModeRender();
      return moveToDone({ questIsDone: doneChallenge, userId });
    });
  };

  handleAddChallange = () => {
    const { saveQuest, task, newChallenge } = this.props;
    this.setState(
      prevState => ({
        challengeSendToUser: true,
        mode: 'render',
        updatedFields: { ...prevState.updatedFields, challengeSendToUser: true }
      }),
      () => {
        const { updatedFields } = this.state;
        newChallenge([]);
        saveQuest(task, updatedFields);
      }
    );
  };

  handleSaveQuest = () => {
    const { saveQuest, startEditMode } = this.props;
    const { questFromProp, updatedFields } = this.handleReturnOldAndNewQuest();
    this.setState(
      prevState => ({
        challengeSendToUser: true,
        mode: 'render',
        updatedFields: { ...prevState.updatedFields, challengeSendToUser: true }
      }),
      () => {
        startEditMode(false);
        saveQuest(questFromProp, updatedFields);
      }
    );
  };

  render() {
    const {
      mode,
      difficulty,
      dueDate,
      group,
      done,
      name,
      isOpenDifficultySelect,
      isDeleteModalOpen,
      isCompletedModalOpen,
      isQuest,
      isFireIconOn,
      isOpenCalendar
    } = this.state;
    const { name: categoryName } = this.props;
    return (
      <>
        {(done === true || mode === 'render') && (
          <ChallengeView
            categoryName={categoryName}
            isFireIconOn={isFireIconOn}
            onModeEdit={this.onModeEdit}
            difficulty={difficulty}
            dueDate={dueDate}
            group={group}
            name={name}
            done={done}
          />
        )}
        {!done && mode === 'newChallenge' && (
          <NewChallengeView
            handleAddChallange={this.handleAddChallange}
            isQuest={isQuest}
            isDeleteModalOpen={isDeleteModalOpen}
            toggleDeleteModal={this.toggleDeleteModal}
            handleSaveSelectedDifficutlyItem={this.handleSaveSelectedDifficutlyItem}
            handleChangeDueDate={this.handleChangeDueDate}
            isOpenDifficultySelect={isOpenDifficultySelect}
            toggleDifficultySelect={this.toggleDifficultySelect}
            difficulty={difficulty}
            dueDate={dueDate}
            group={group}
            name={name}
            onDelete={this.handleDeleteQuest}
          />
        )}
        {!done && mode === 'edit' && (
          <EditChallengeView
            isQuest={isQuest}
            isCompletedModalOpen={isCompletedModalOpen}
            toggleCompletedModal={this.toggleCompletedModal}
            handleSaveQuest={this.handleSaveQuest}
            isDeleteModalOpen={isDeleteModalOpen}
            toggleDeleteModal={this.toggleDeleteModal}
            handleSaveSelectedDifficutlyItem={this.handleSaveSelectedDifficutlyItem}
            handleChangeDueDate={this.handleChangeDueDate}
            isOpenDifficultySelect={isOpenDifficultySelect}
            toggleDifficultySelect={this.toggleDifficultySelect}
            difficulty={difficulty}
            dueDate={dueDate}
            group={group}
            name={name}
            onDelete={this.handleDeleteQuest}
            moveToDone={this.handleDoneQuest}
            toggleIsOpenCalendar={this.toggleIsOpenCalendar}
            isOpenCalendar={isOpenCalendar}
          />
        )}
      </>
    );
  }
}

ChallengeCardContainer.defaultProps = {
  challengeSendToUser: false,
  // mode: 'newChallenge',
  createdAt: '',
  difficulty: 'Easy',
  updatedAt: '',
  dueDate: '',
  group: 'STUFF',
  name: '',
  isQuest: true,
  _id: ''
};

ChallengeCardContainer.propTypes = {
  task: PropTypes.shape({
    challengeSendToUser: PropTypes.bool,
    createdAt: PropTypes.string,
    difficulty: PropTypes.string,
    done: PropTypes.bool,
    dueDate: PropTypes.string,
    group: PropTypes.string,
    isQuest: PropTypes.bool,
    name: PropTypes.string,
    updatedAt: PropTypes.string,
    _id: PropTypes.string
  }),
  mode: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired
};

const mts = state => ({
  userId: userSelectors.userId(state),
  isEditMode: state.isEditMode
});

const mapDispatch = dispatch => ({
  newChallenge: getNewChallenge => dispatch(newChallenge(getNewChallenge)),
  saveQuest: (oldQuest, newQuest) => dispatch(saveQuest(oldQuest, newQuest)),
  deleteQuest: param => dispatch(deleteQuest(param)),
  moveToDone: questIsDone => dispatch(moveToDone(questIsDone)),
  startEditMode: editMode => dispatch(startEditMode(editMode))
});

export default connect(
  mts,
  mapDispatch
)(ChallengeCardContainer);
