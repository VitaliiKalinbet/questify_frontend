import React from 'react';
import PropTypes from 'prop-types';
import QuestCardContainer from './QuestCardContainer/QuestCardContainer';
import ChallengeCardContainer from './ChallengeCardContainer/ChallengeCardContainer';

// task в пропсах это объект для рендера, и это или квест или челендж (тут определяем что это)
const CardContainer = ({ task }) => {
  return <>{task.isQuest ? <QuestCardContainer task={task} /> : <ChallengeCardContainer task={task} />}</>;
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
  })
};

export default CardContainer;

// Пример объекта челенджа:
// {
//   challengeSendToUser: false,
//   createdAt: "2019-04-22T17:44:22.004Z",
//   difficulty: "Normal",
//   done: false,
//   dueDate: "2019-03-30T19:14:07.691Z",
//   group: "Learning",
//   isQuest: false,
//   name: "Read a book The brain that changes itself by Norman Doidge",
//   updatedAt: "2019-04-22T17:44:22.004Z",
//   _id: "5c9fc3ac8a9f77611f74e779"
// }

// Пример объекта квеста:
// {
//   createdAt: "2019-04-22T17:44:21.993Z",
//   difficulty: "Hard",
//   done: false,
//   dueDate: "2019-03-30T19:14:07.686Z",
//   group: "Productivity",
//   isPriority: false,
//   isQuest: true,
//   name: "Complete 3 quests",
//   updatedAt: "2019-04-22T17:44:21.993Z",
//   _id: "5c9fc0988a9f77611f74e76e"
// }
