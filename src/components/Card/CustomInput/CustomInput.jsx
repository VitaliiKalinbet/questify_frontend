import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './CustomInput.module.css';

class ExampleCustomInput extends Component {
  state = {};

  render() {
    const { onClick, value } = this.props;
    return (
      <button type="button" className={s.btn} onClick={onClick}>
        {value}
      </button>
    );
  }
}

ExampleCustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

ExampleCustomInput.defaultProps = {
  onClick: () => null,
  value: ''
};

export default ExampleCustomInput;
