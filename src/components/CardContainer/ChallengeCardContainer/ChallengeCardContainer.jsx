import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChallengeView from './ChallengeView/ChallengeView';
import EditChallengeView from './EditChallengeView/EditChallengeView';
import NewChallengeView from './NewChallengeView/NewChallengeView';

class ChallengeCardContainer extends Component {
  state = {
    mode: this.props.mode,
    difficulty: this.props.task.difficulty,
    dueDate: this.props.task.dueDate,
    group: this.props.task.group,
    name: this.props.task.name,

    isOpenDifficultySelect: false,

    isDeleteModalOpen: false,
    isCompletedModalOpen: false
  };

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

  render() {
    const { mode, difficulty, dueDate, group, name, isOpenDifficultySelect, isDeleteModalOpen } = this.state;
    console.log('ChallengeCardContainer group', group);
    return (
      <>
        {mode === 'newChallenge' && (
          <NewChallengeView
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
          />
        )}
        {mode === 'edit' && <EditChallengeView />}
        {mode === 'render' && <ChallengeView />}
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

export default ChallengeCardContainer;

// const challenge = {
//   challengeSendToUser: false,
//   createdAt: '2019-04-22T17:44:22.004Z',
//   difficulty: 'Normal',
//   done: false,
//   dueDate: '2019-03-30T19:14:07.691Z',
//   group: 'Learning',
//   isQuest: false,
//   name: 'Read a book The brain that changes itself by Norman Doidge',
//   updatedAt: '2019-04-22T17:44:22.004Z',
//   _id: '5c9fc3ac8a9f77611f74e779'
// };
