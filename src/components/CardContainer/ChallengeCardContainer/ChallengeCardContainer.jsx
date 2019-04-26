import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChallengeView from './ChallengeView/ChallengeView';
import EditChallengeView from './EditChallengeView/EditChallengeView';
import NewChallengeView from './NewChallengeView/NewChallengeView';
import { saveQuest, deleteQuest } from '../../../redux/user/userAction';

class ChallengeCardContainer extends Component {
  state = {
    mode: this.props.mode,
    difficulty: this.props.task.difficulty,
    dueDate: this.props.task.dueDate,
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

  handleDeleteQuest = () => {
    const {
      task: { _id: id, dueDate },
      deleteQuest
    } = this.props;
    deleteQuest({ id, dueDate });
    console.log('qwerty');
  };

  render() {
    const {
      mode,
      difficulty,
      dueDate,
      group,
      name,
      isOpenDifficultySelect,
      isDeleteModalOpen,
      isCompletedModalOpen,
      isQuest,
      isFireIconOn
    } = this.state;
    return (
      <>
        {mode === 'newChallenge' && (
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
        {mode === 'edit' && (
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
          />
        )}
        {mode === 'render' && (
          <ChallengeView
            isFireIconOn={isFireIconOn}
            onModeEdit={this.onModeEdit}
            difficulty={difficulty}
            dueDate={dueDate}
            group={group}
            name={name}
          />
        )}
      </>
    );
  }
}

ChallengeCardContainer.defaultProps = {
  mode: 'newChallenge'
};

ChallengeCardContainer.propTypes = {
  task: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    dueDate: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    challengeSendToUser: PropTypes.bool.isRequired,
    isQuest: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }),
  mode: PropTypes.string
};

const mapDispatch = dispath => ({
  saveQuest: (oldQuest, newQuest) => dispath(saveQuest(oldQuest, newQuest)),
  deleteQuest: param => dispath(deleteQuest(param))
});

export default connect(
  null,
  mapDispatch
)(ChallengeCardContainer);
