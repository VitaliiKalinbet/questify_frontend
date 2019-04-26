import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userSelectors from '../../redux/user/userSelectors';
import QuestCardContainer from './QuestCardContainer/QuestCardContainer';
import ChallengeCardContainer from './ChallengeCardContainer/ChallengeCardContainer';

const CardContainer = ({ task, mode, addMode }) => {
  // console.log(task);
  // if (addMode) return <QuestCardContainer mode="newQuest" task={task} />;
  return <>{task.isQuest ? <QuestCardContainer mode={mode} task={task} /> : <ChallengeCardContainer task={task} />}</>;
};

CardContainer.defaultProps = {
  isPriority: false,
  challengeSendToUser: false,
  createdAt: '',
  updatedAt: '',
  dueDate: '',
  _id: ''
};

CardContainer.propTypes = {
  task: PropTypes.shape({
    challengeSendToUser: PropTypes.bool,
    difficulty: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    dueDate: PropTypes.string,
    group: PropTypes.string.isRequired,
    isPriority: PropTypes.bool,
    isQuest: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    _id: PropTypes.string
  }),
  mode: PropTypes.string.isRequired
};

const mapState = state => ({
  addMode: userSelectors.getAddMode(state)
});

export default connect(mapState)(CardContainer);
