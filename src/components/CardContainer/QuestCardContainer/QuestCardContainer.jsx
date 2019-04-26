import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import QuestView from './QuestView/QuestView';
import EditQuestView from './EditQuestView/EditQuestView';
import NewQuestView from './NewQuestView/NewQuestView';
import { saveQuest, deleteQuest } from '../../../redux/user/userAction';

class QuestCardContainer extends Component {
  state = {
    mode: this.props.mode,
    difficulty: this.props.task.difficulty,
    dueDate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.sssZ'), // for frontend test
    // dueDate: this.props.task.dueDate,
    done: this.props.task.done,
    group: this.props.task.group,
    isPriority: this.props.task.isPriority,
    name: this.props.task.name,
    isOpenDifficultySelect: false,
    isOpenGroupSelect: false,
    isDeleteModalOpen: false,
    isCompletedModalOpen: false,
    isFireIconOn: false
  };
  // mode это режим карточки квеста, может быть 'render', 'edit', 'newQuest'

  componentDidMount() {
    const { dueDate } = this.state;
    if (new Date(dueDate).getTime() < Date.now()) {
      this.setState({
        isFireIconOn: true
      });
    } else {
      this.setState({
        isFireIconOn: false
      });
    }
  }

  toggleDifficultySelect = () => {
    this.setState(prevState => ({
      isOpenDifficultySelect: !prevState.isOpenDifficultySelect,
      isOpenGroupSelect: false
    }));
  };

  toggleOpenGroupSelect = () => {
    this.setState(prevState => ({
      isOpenGroupSelect: !prevState.isOpenGroupSelect,
      isOpenDifficultySelect: false
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

  toggleIsPriority = () => {
    this.setState(prevState => ({
      isPriority: !prevState.isPriority
    }));
  };

  handelChangeNameQuest = e => {
    const value = e.target.value;
    this.setState({
      name: value
    });
  };

  handleChangeDueDate = event => {
    this.setState({
      dueDate: moment(event._d).format('YYYY-MM-DDTHH:mm:ss.sssZ')
    });
  };

  handleSaveSelectedDifficutlyItem = difficultValue => {
    this.setState({
      difficulty: difficultValue
    });
  };

  handleSaveSelectedGroupItem = groupValue => {
    this.setState({
      group: groupValue
    });
  };

  handleReturnOldAndNewQuest = () => {
    const {
      name: stateName,
      group: stateGroup,
      difficulty: stateDifficulty,
      dueDate: stateDate,
      isPriority: stateIsIsPriority
    } = this.state;

    const { dueDate, isQuest, isPriority, _id, name, group, difficulty, done, createdAt, updatedAt } = this.props.task;
    const questFromProp = {
      dueDate,
      isQuest,
      isPriority,
      _id,
      name,
      group,
      difficulty,
      done,
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

  handleCreateCard = () => {
    const { questFromProp, newQuest } = this.handleReturnOldAndNewQuest;
    this.showCompletedModal({ ...questFromProp, ...newQuest });
  };

  handleSaveQuest = () => {
    const { saveQuest } = this.props;
    const { questFromProp, newQuest } = this.handleReturnOldAndNewQuest();
    this.onModeRender();
    return saveQuest(questFromProp, { ...questFromProp, ...newQuest });
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
  };

  render() {
    const {
      mode,
      difficulty,
      dueDate,
      group,
      isPriority,
      name,
      done,
      isOpenDifficultySelect,
      isOpenGroupSelect,
      isDeleteModalOpen,
      isCompletedModalOpen,
      isFireIconOn
    } = this.state;
    return (
      <>
        {mode === 'render' && (
          <QuestView
            isFireIconOn={isFireIconOn}
            difficulty={difficulty}
            dueDate={dueDate}
            group={group}
            isPriority={isPriority}
            name={name}
            done={done}
            onModeEdit={this.onModeEdit}
          />
        )}
        {mode === 'edit' && (
          <EditQuestView
            toggleCompletedModal={this.toggleCompletedModal}
            isCompletedModalOpen={isCompletedModalOpen}
            isDeleteModalOpen={isDeleteModalOpen}
            toggleDeleteModal={this.toggleDeleteModal}
            handleSaveSelectedGroupItem={this.handleSaveSelectedGroupItem}
            handleSaveSelectedDifficutlyItem={this.handleSaveSelectedDifficutlyItem}
            handleChangeDueDate={this.handleChangeDueDate}
            handelChangeNameQuest={this.handelChangeNameQuest}
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
            onSave={this.handleSaveQuest}
            onDelete={this.handleDeleteQuest}
          />
        )}
        {mode === 'newQuest' && (
          <NewQuestView
            isDeleteModalOpen={isDeleteModalOpen}
            toggleDeleteModal={this.toggleDeleteModal}
            handleSaveSelectedGroupItem={this.handleSaveSelectedGroupItem}
            handleSaveSelectedDifficutlyItem={this.handleSaveSelectedDifficutlyItem}
            handleChangeDueDate={this.handleChangeDueDate}
            handelChangeNameQuest={this.handelChangeNameQuest}
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
      </>
    );
  }
}

QuestCardContainer.defaultProps = {
  mode: 'render'
};

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
)(QuestCardContainer);
