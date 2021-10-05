import React from 'react';
import PropTypes from 'prop-types';
import { BarContainer, Gradient, White } from './style';

const SectionBar = ({ pattern }) => {
  return (
    <BarContainer pattern={pattern}>
      <Gradient>
        <White />
      </Gradient>
    </BarContainer>
  );
};

SectionBar.propTypes = {
  pattern: PropTypes.oneOf(['top', 'bottom']).isRequired,
};

export default SectionBar;
