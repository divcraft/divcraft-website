import React from 'react';
import { Paragraph } from 'components';
import { CircleLinkContainer } from './style';

const DiscountCircle = () => {
  return (
    <CircleLinkContainer
      to="/promocja"
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
      #2578b8
    "
    >
      <Paragraph color="blue">
        -30<span>%</span>
      </Paragraph>
    </CircleLinkContainer>
  );
};

export default DiscountCircle;
