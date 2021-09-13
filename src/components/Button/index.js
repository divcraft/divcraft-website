import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyLinkButton, LinkButton, RegularButton } from './style';

const Button = ({ pattern, children, ...props }) => {
  if (pattern === 'gatsbyLink')
    return (
      <GatsbyLinkButton
        {...props}
        duration={1.3}
        cover
        direction="right"
        bg="
          url(/logos/white-all-vertical-logo.svg)
          center / 170px auto
          no-repeat
          fixed
          padding-box
          content-box
          #356A8C
        "
      >
        {children}
      </GatsbyLinkButton>
    );
  if (pattern === 'link') return <LinkButton {...props}>{children}</LinkButton>;
  if (pattern === 'button')
    return <RegularButton {...props}>{children}</RegularButton>;
  return null;
};

Button.propTypes = {
  pattern: PropTypes.oneOf(['gatsbyLink', 'link', 'button']).isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
