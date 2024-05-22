import React from 'react';
import PropTypes from 'prop-types';

const isValidColor = (color) => {
  const testElement = document.createElement('div');
  testElement.style.color = color;
  return testElement.style.color !== '';
};

const TextColor = ({ text, color }) => {
  const colorToApply = isValidColor(color) ? color : '#000000';
  return (
    <span style={{ color: colorToApply }}>
      {text}
    </span>
  );
};

TextColor.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TextColor;
