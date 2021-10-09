import React from 'react';
import PropTypes from 'prop-types';
import { Form as StyledForm } from './style';

const Form = ({ children, pattern }) => {
  return (
    <StyledForm pattern={pattern} noValidate="novalidate">
      {children}
    </StyledForm>
  );
};

Form.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  pattern: PropTypes.oneOf(['contactForm', 'discountForm']).isRequired,
};

export default Form;
