import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Paragraph, Button, Wrapper } from 'components';
import { BannerContainer, FlexContainer } from './style';

const CookiesBanner = () => {
  const allowCookies = !!Cookies.get('allow-cookies');
  const [cookiesAllowed, setCookiesAllowed] = useState(allowCookies);
  const handleButton = e => {
    e.preventDefault();
    Cookies.set('allow-cookies', true, { expires: 365 });
    Cookies.set('gatsby-gdpr-google-analytics', true, { expires: 365 });
    setCookiesAllowed(!cookiesAllowed);
  };
  return (
    !cookiesAllowed && (
      <BannerContainer>
        <Wrapper>
          <FlexContainer>
            <Paragraph color="white">
              Nasza strona wykorzystuje pliki cookies w celu optymalizacji
              wydajności i jakości naszych usług,
            </Paragraph>
            <Button
              pattern="button"
              onClick={e => handleButton(e)}
              type="button"
            >
              Wyrażam zgodę
            </Button>
          </FlexContainer>
        </Wrapper>
      </BannerContainer>
    )
  );
};

export default CookiesBanner;
