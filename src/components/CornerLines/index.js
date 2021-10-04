import React from 'react';
import PropTypes from 'prop-types';
import { CornersContainer } from './style';

const CornerLines = ({ pattern }) => {
  return <CornersContainer pattern={pattern} />;
};

CornerLines.propTypes = {
  pattern: PropTypes.oneOf(['top', 'bottom']).isRequired,
};

export default CornerLines;
