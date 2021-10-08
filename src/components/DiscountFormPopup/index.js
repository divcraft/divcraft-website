import React, { useContext } from 'react';
import { FormContext } from 'utils';
import { PopupContainer } from './style';

const DiscountFormPopup = () => {
  const [showForm, setShowForm] = useContext(FormContext);
  return (
    showForm && (
      <PopupContainer>
        <button onClick={() => setShowForm(!showForm)} type="button">
          hide
        </button>
        <div>discount form popup</div>
      </PopupContainer>
    )
  );
};

export default DiscountFormPopup;
