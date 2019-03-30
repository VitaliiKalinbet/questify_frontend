import React from 'react';
import PropTypes from 'prop-types';

const button = ({ style, click }) => (
  <button type="button" className={style} onClick={() => click()}>
    +
  </button>
);
button.propTypes = {
  style: PropTypes.string,
  click: PropTypes.func
};

button.defaultProps = {
  style: 'button',
  click: () => {}
};

export default button;
