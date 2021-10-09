import React, { useContext } from 'react';
import { FormContext } from 'utils';
import { HideFormButton, Button, Form, Paragraph } from 'components';
import { PopupContainer } from './style';

const DiscountFormPopup = () => {
  const [showForm, setShowForm] = useContext(FormContext);
  return (
    showForm && (
      <PopupContainer>
        <HideFormButton
          pattern="black"
          onClick={() => setShowForm(!showForm)}
          type="button"
        />
        <Paragraph color="black">
          Zapisz się, a my skontaktujemy się z Tobą i omówimy szczegóły
          współpracy
        </Paragraph>
        <Form pattern="discountForm">
          <div>
            <label htmlFor="discountFormName">
              <div>Imię</div>
              <input id="discountFormName" type="text" />
            </label>
          </div>
          <div>
            <label htmlFor="discountFormEmail">
              <div>Adres email</div>
              <input id="discountFormEmail" type="email" />
            </label>
          </div>
          <div>
            <Button
              type="submit"
              onClick={e => e.preventDefault()}
              pattern="button"
            >
              Wyślij
            </Button>
          </div>
        </Form>
      </PopupContainer>
    )
  );
};

export default DiscountFormPopup;
