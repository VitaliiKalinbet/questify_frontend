import React from 'react';
import PropTypes from 'prop-types';
import QuestCardContainer from './QuestCardContainer/QuestCardContainer';
import ChallengeCardContainer from './ChallengeCardContainer/ChallengeCardContainer';

const CardContainer = ({ task, mode }) => {
  return <>{task.isQuest ? <QuestCardContainer mode={mode} task={task} /> : <ChallengeCardContainer task={task} />}</>;
};

CardContainer.defaultProps = {
  isPriority: false,
  challengeSendToUser: false
};

CardContainer.propTypes = {
  task: PropTypes.shape({
    challengeSendToUser: PropTypes.bool,
    createdAt: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    dueDate: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    isPriority: PropTypes.bool,
    isQuest: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }),
  mode: PropTypes.string.isRequired
};

export default CardContainer;
