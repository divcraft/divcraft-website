import React from 'react';
import PropTypes from 'prop-types';
import { TitleHeader as StyledTitleHeader } from './style';

const TitleHeader = ({ color, children }) => {
  return <StyledTitleHeader color={color}>{children}</StyledTitleHeader>;
};

TitleHeader.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default TitleHeader;
