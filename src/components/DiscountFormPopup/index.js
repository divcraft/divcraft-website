import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import { FormContext } from 'utils';
import { HideFormButton, Button, Form, Paragraph } from 'components';
import { PopupContainer } from './style';

const DiscountFormPopup = () => {
  const [showForm, setShowForm] = useContext(FormContext);
  const [emailSent, setEmailSent] = useState(null);
  const validationSchema = Yup.object().shape({
    discountFormName: Yup.string()
      .min(2, 'Podane imię jest za krótkie')
      .max(50, 'Podane imię jest za długie')
      .required('Wpisz imię'),
    discountFormEmail: Yup.string()
      .email('Wpisz poprawny adres email')
      .required('Wpisz adres email'),
  });
  const formik = useFormik({
    initialValues: {
      discountFormName: '',
      discountFormEmail: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      const api = process.env.REACT_APP_DISCOUNT_FORM_API;
      if (emailSent) setEmailSent(null);
      Axios.post(api, JSON.stringify(values))
        .then(() => {
          setEmailSent('SUCCESS');
          resetForm();
        })
        .catch(() => {
          setEmailSent('FAIL');
        });
    },
  });
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
        <Form onSubmit={formik.handleSubmit} pattern="discountForm">
          <div>
            <label htmlFor="discountFormName">
              <div>Imię</div>
              <span>{formik.errors.discountFormName}</span>
              <input
                id="discountFormName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.discountFormName}
              />
            </label>
          </div>
          <div>
            <label htmlFor="discountFormEmail">
              <div>Adres email</div>
              <span>{formik.errors.discountFormEmail}</span>
              <input
                id="discountFormEmail"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.discountFormEmail}
              />
            </label>
          </div>
          <div>
            <Button type="submit" pattern="button">
              Wyślij
            </Button>
            {emailSent === 'SUCCESS' && (
              <span style={{ color: 'green' }}>
                Wiadomość wysłana. Potwierdzenie znajdziesz w swojej skrzynce
                odbiorczej.
              </span>
            )}
            {emailSent === 'FAIL' && (
              <span>Wystąpił problem z połączeniem. Spróbuj ponownie.</span>
            )}
          </div>
        </Form>
      </PopupContainer>
    )
  );
};

export default DiscountFormPopup;
