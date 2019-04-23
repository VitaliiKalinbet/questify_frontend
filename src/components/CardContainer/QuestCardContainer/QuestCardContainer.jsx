import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestView from './QuestView/QuestView';
import EditQuestView from './EditQuestView/EditQuestView';
import NewQuestView from './NewQuestView/NewQuestView';

class QuestCardContainer extends Component {
  state = {
    mode: 'render',
    difficulty: this.props.task.difficulty,
    dueDate: this.props.task.dueDate,
    group: this.props.task.group,
    isPriority: this.props.task.isPriority,
    name: this.props.task.name,
    isOpenDifficultySelect: false,
    isOpenGroupSelect: false
  };
  // mode это режим карточки квеста, может быть 'render', 'edit', 'newQuest'

  toggleDifficultySelect = () => {
    this.setState(prevState => ({
      isOpenDifficultySelect: !prevState.isOpenDifficultySelect
    }));
  };

  toggleOpenGroupSelect = () => {
    this.setState(prevState => ({
      isOpenGroupSelect: !prevState.isOpenGroupSelect
    }));
  };

  onModeEdit = () => {
    this.setState({
      mode: 'edit'
    });
  };

  toggleIsPriority = () => {
    this.setState(prevState => ({
      isPriority: !prevState.isPriority
    }));
  };

  render() {
    const {
      mode,
      difficulty,
      dueDate,
      group,
      isPriority,
      name,
      isOpenDifficultySelect,
      isOpenGroupSelect
    } = this.state;
    return (
      <>
        {mode === 'render' && (
          <QuestView
            difficulty={difficulty}
            dueDate={dueDate}
            group={group}
            isPriority={isPriority}
            name={name}
            onModeEdit={this.onModeEdit}
          />
        )}
        {mode === 'edit' && (
          <EditQuestView
            toggleOpenGroupSelect={this.toggleOpenGroupSelect}
            isOpenGroupSelect={isOpenGroupSelect}
            toggleIsPriority={this.toggleIsPriority}
            isOpenDifficultySelect={isOpenDifficultySelect}
            toggleDifficultySelect={this.toggleDifficultySelect}
            difficulty={difficulty}
            dueDate={dueDate}
            group={group}
            isPriority={isPriority}
            name={name}
          />
        )}
        {mode === 'newQuest' && <NewQuestView />}
      </>
    );
  }
}

QuestCardContainer.propTypes = {
  task: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    dueDate: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    isPriority: PropTypes.bool.isRequired,
    isQuest: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default QuestCardContainer;
