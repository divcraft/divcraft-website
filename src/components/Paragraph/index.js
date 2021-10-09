import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph as StyledParagraph } from './style';

const Paragraph = ({ color, children }) => {
  return <StyledParagraph color={color}>{children}</StyledParagraph>;
};

Paragraph.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]).isRequired,
};

export default Paragraph;
