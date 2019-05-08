/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddMode } from '../../redux/createQuest/createQuestReducer';
import { startEditMode } from '../../redux/editMode/editModeAction';
// import PropTypes from 'prop-types';

import Button from './Button';
import s from './CreateQuestButton.module.css';

const CreateQuestButton = (props) =>  {
  const buttonClick = () => {
    props.startAddMode();
    props.startEditMode(true);
  };

  return (<Button {...props} click={props.isEditMode ? () => {} : buttonClick} style={s.button} />);
}
const mapToState = state => ({
  isEditMode: state.isEditMode
});

const mapDispatchToProps = dispatch => ({
  startAddMode: () => dispatch(startAddMode()),
  startEditMode: editMode => dispatch(startEditMode(editMode))
});

export default connect(
  mapToState,
  mapDispatchToProps
)(CreateQuestButton);
