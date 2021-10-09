import React, { useContext } from 'react';
import { FormContext } from 'utils';
import { HideFormButton } from 'components';
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
        <div>discount form popup</div>
      </PopupContainer>
    )
  );
};

export default DiscountFormPopup;
