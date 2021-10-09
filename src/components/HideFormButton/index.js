import React from 'react';
import PropTypes from 'prop-types';
import { HideFormButton as StyledHideFormButton } from './style';

const HideFormButton = ({ pattern, ...props }) => {
  return <StyledHideFormButton {...props} pattern={pattern} />;
};

HideFormButton.propTypes = {
  pattern: PropTypes.oneOf(['yellow', 'black']).isRequired,
};

export default HideFormButton;
