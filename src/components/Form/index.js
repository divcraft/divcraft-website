import React from 'react';
import PropTypes from 'prop-types';
import { Form as StyledForm } from './style';

const Form = ({ children, pattern, ...props }) => {
  return (
    <StyledForm pattern={pattern} {...props} noValidate="novalidate">
      {children}
    </StyledForm>
  );
};

Form.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  pattern: PropTypes.oneOf(['contactForm']).isRequired,
};

export default Form;
