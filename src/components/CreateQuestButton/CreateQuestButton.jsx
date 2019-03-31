import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './Button';
import { asyncOperetion } from '../../redux/createQuestButtonReducerTest';
import s from './CreateQuestButton.module.css';

class CreateQuestButton extends Component {
  buttonClick = () => {
    const { createQuest } = this.props;
    createQuest();
  };

  render() {
    return <Button {...this.props} click={this.buttonClick} style={s.button} />;
  }
}

CreateQuestButton.propTypes = {
  createQuest: PropTypes.func
};

CreateQuestButton.defaultProps = {
  createQuest: () => {}
};

const mapDispatchToProps = {
  createQuest: asyncOperetion.createQuest
};

export default connect(
  null,
  mapDispatchToProps
)(CreateQuestButton);
