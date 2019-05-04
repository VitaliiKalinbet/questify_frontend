import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import ChallengeView from './ChallengeView/ChallengeView';
import EditChallengeView from './EditChallengeView/EditChallengeView';
import NewChallengeView from './NewChallengeView/NewChallengeView';
import { saveQuest, deleteQuest, moveToDone } from '../../../redux/user/userAction';

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
    isFireIconOn: false
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

  handleChangeDueDate = event => {
    const changedDate = moment(event._d).format('YYYY-MM-DDTHH:mm:ss.sssZ');
    this.setState(prevState => ({
      isFireIconOn: getFireIconOn(changedDate, new Date()),
      dueDate: changedDate,
      updatedFields: { ...prevState.updatedFields, dueDate: changedDate }
    }));
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
    const { updatedFields } = this.state;
    const questFromProp = this.props.task;
    return { questFromProp, updatedFields };
  };

  handleDeleteQuest = () => {
    const {
      task: { _id: id, dueDate },
      deleteQuest
    } = this.props;
    deleteQuest({ id, dueDate });
  };

  handleDoneQuest = () => {
    this.setState({ mode: 'render' }, () => {
      const { moveToDone } = this.props;
      const { questFromProp, newQuest } = this.handleReturnOldAndNewQuest();
      this.onModeRender();
      return moveToDone({ ...questFromProp, ...newQuest });
    });
  };

  handleAddQuest = () => {
    const { saveQuest } = this.props;
    const { questFromProp, updatedFields } = this.handleReturnOldAndNewQuest();
    console.log('updatedFields', updatedFields);
    // this.onModeRender();
    // saveQuest({ ...questFromProp, ...updatedFields });
    this.setState(
      prevState => ({
        challengeSendToUser: true,
        mode: 'render',
        updatedFields: { ...prevState.updatedFields, challengeSendToUser: true }
      }),
      () =>
        saveQuest(questFromProp, {
          ...updatedFields,
          challengeSendToUser: true,
          mode: 'render'
        })
    );
  };

  handleSaveQuest = () => {
    const { saveQuest } = this.props;
    const { questFromProp, updatedFields } = this.handleReturnOldAndNewQuest();
    this.setState(
      prevState => ({
        challengeSendToUser: true,
        mode: 'render',
        updatedFields: { ...prevState.updatedFields, challengeSendToUser: true }
      }),
      () => saveQuest(questFromProp, updatedFields)
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
            handleAddChallange={this.handleAddQuest}
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
  mode: PropTypes.string.isRequired
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
