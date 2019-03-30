import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './Button';
import { asyncOperetion } from '../../redux/user';
import s from './CreateQuestButton.module.css';

class createQuestButton extends Component {
  buttonClick = () => {
    const { createQuest } = this.props;
    createQuest('red');
  };

  render() {
    return <Button {...this.props} click={this.buttonClick} style={s.button} />;
  }
}

createQuestButton.propTypes = {
  createQuest: PropTypes.func
};

createQuestButton.defaultProps = {
  createQuest: () => {}
};

const mapDispatchToProps = {
  createQuest: asyncOperetion.loginUser
};

export default connect(
  null,
  mapDispatchToProps
)(createQuestButton);
