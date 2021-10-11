import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { TitleHeader, Button, HideFormButton } from 'components';
import {
  PopupBackgound,
  PopupContainer,
  TitleContainer,
  ButtonContainer,
} from './style';

const DiscountInfoPopup = () => {
  const hideDiscountPopup = Cookies.get('hide-discount-popup');
  const [hidePopup, setHidePopup] = useState(true);
  const handleButton = () => {
    Cookies.set('hide-discount-popup', true);
    setHidePopup(true);
    return true;
  };
  useEffect(() => {
    document.body.style.overflow = hidePopup ? 'auto' : 'hidden';
  }, [hidePopup]);
  useEffect(() => {
    setTimeout(() => setHidePopup(hideDiscountPopup), 5000);
  }, []);
  return (
    !hidePopup && (
      <PopupBackgound>
        <PopupContainer>
          <HideFormButton pattern="yellow" onClick={handleButton} />
          <TitleContainer>
            <TitleHeader color="white">
              Pierwszy raz tutaj? Skorzystaj z naszej zniżki!
            </TitleHeader>
          </TitleContainer>
          <p>
            Przygotowaliśmy dla Ciebie aż <strong>30% rabatu</strong> na nasze
            usługi
          </p>
          <ButtonContainer>
            <Button pattern="gatsbyLink" onClick={handleButton} to="/promocja">
              Poznaj szczegóły
            </Button>
          </ButtonContainer>
        </PopupContainer>
      </PopupBackgound>
    )
  );
};

export default DiscountInfoPopup;
