import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import newId from 'uuid/v4';
import userSelectors from '../../redux/user/userSelectors';
import QuestCardContainer from './QuestCardContainer/QuestCardContainer';
import ChallengeCardContainer from './ChallengeCardContainer/ChallengeCardContainer';

const defaultTask = {
  difficulty: 'Easy',
  done: false,
  dueDate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.sssZ'),
  group: 'Stuff',
  isPriority: false,
  isQuest: true,
  name: '',
  _id: newId()
};

const CardContainer = ({ task = { ...defaultTask }, mode, name }) => {
  return (
    <>
      {task.isQuest ? (
        <QuestCardContainer mode={mode} name={name} task={task} />
      ) : (
        <ChallengeCardContainer task={task} name={name} />
      )}
    </>
  );
};

CardContainer.defaultProps = {
  isPriority: false,
  challengeSendToUser: false,
  createdAt: '',
  updatedAt: '',
  difficulty: '',
  done: false,
  dueDate: '',
  name: '',
  group: '',
  _id: '',
  isQuest: true
};

CardContainer.propTypes = {
  task: PropTypes.shape({
    challengeSendToUser: PropTypes.bool,
    difficulty: PropTypes.string,
    done: PropTypes.bool,
    dueDate: PropTypes.string,
    group: PropTypes.string,
    isPriority: PropTypes.bool,
    isQuest: PropTypes.bool,
    name: PropTypes.string,
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
