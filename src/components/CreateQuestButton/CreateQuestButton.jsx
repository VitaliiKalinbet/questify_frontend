/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddMode } from '../../redux/createQuest/createQuestReducer';
// import PropTypes from 'prop-types';

import Button from './Button';
import s from './CreateQuestButton.module.css';

class CreateQuestButton extends Component {
  buttonClick = () => {
    // eslint-disable-next-line no-shadow
    const { startAddMode } = this.props;
    startAddMode();
  };

  render() {
    return <Button {...this.props} click={this.buttonClick} style={s.button} />;
  }
}

const mapDispatchToProps = {
  startAddMode
};

export default connect(
  null,
  mapDispatchToProps
)(CreateQuestButton);
