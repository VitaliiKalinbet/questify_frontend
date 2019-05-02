import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChallengeView from './ChallengeView/ChallengeView';
import EditChallengeView from './EditChallengeView/EditChallengeView';
import NewChallengeView from './NewChallengeView/NewChallengeView';
import { saveQuest, deleteQuest, moveToDone } from '../../../redux/user/userAction';

class ChallengeCardContainer extends Component {
  state = {
    mode: this.props.mode,
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
    isFireIconOn: false
  };

  componentDidMount() {
    const { challengeSendToUser, isFireIconOn, dueDate } = this.state;
    if (challengeSendToUser) {
      this.setState({
        mode: 'render'
      });
    }
    if (new Date(dueDate).getTime() < Date.now()) {
      this.setState({
        isFireIconOn: true
      });
    }
  }

  toggleDifficultySelect = () => {
    this.setState(prevState => ({
      isOpenDifficultySelect: !prevState.isOpenDifficultySelect
    }));
  };

  onModeEdit = () => {
    this.setState({
      mode: 'edit'
    });
  };

  onModeRender = () => {
    this.setState({
      mode: 'render'
    });
  };

  handleChangeDueDate = e => {
    this.setState({
      dueDate: new Date(e.valueOf())
    });
  };

  handleSaveSelectedDifficutlyItem = difficultValue => {
    this.setState({
      difficulty: difficultValue
    });
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
    const {
      name: stateName,
      group: stateGroup,
      difficulty: stateDifficulty,
      dueDate: stateDate,
      isPriority: stateIsIsPriority
    } = this.state;

    const {
      dueDate,
      isQuest,
      isPriority,
      _id,
      name,
      group,
      difficulty,
      done,
      createdAt,
      updatedAt,
      challengeSendToUser
    } = this.props.task;
    const questFromProp = {
      dueDate,
      isQuest,
      isPriority,
      _id,
      name,
      group,
      difficulty,
      done,
      challengeSendToUser,
      createdAt,
      updatedAt
    };
    const newQuest = {
      ...questFromProp,

      name: stateName,
      group: stateGroup,
      difficulty: stateDifficulty,
      dueDate: stateDate,
      isPriority: stateIsIsPriority
    };

    return { questFromProp, newQuest };
  };

  handleDeleteQuest = () => {
    const {
      task: { _id: id, dueDate },
      deleteQuest
    } = this.props;
    deleteQuest({ id, dueDate });
  };

  handleDoneQuest = () => {
    this.setState({ mode: 'render' });
    const { moveToDone } = this.props;
    const { questFromProp, newQuest } = this.handleReturnOldAndNewQuest();
    this.onModeRender();
    return moveToDone({ ...questFromProp, ...newQuest });
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
      isFireIconOn
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
            onModeRender={this.onModeRender}
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
            onModeRender={this.onModeRender}
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
          />
        )}
      </>
    );
  }
}

ChallengeCardContainer.defaultProps = {
  challengeSendToUser: false,
  mode: 'newChallenge',
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
  mode: PropTypes.string
};

const mapDispatch = dispath => ({
  saveQuest: (oldQuest, newQuest) => dispath(saveQuest(oldQuest, newQuest)),
  deleteQuest: param => dispath(deleteQuest(param)),
  moveToDone: questIsDone => dispath(moveToDone(questIsDone))
});

export default connect(
  null,
  mapDispatch
)(ChallengeCardContainer);
