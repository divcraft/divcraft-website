import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import { Wrapper, Image, Button, Form } from 'components';
import { SectionContainer, FormContainer, FormImageContainer } from './style';

const ContactFormSection = () => {
  const [emailSent, setEmailSent] = useState(null);
  const validationSchema = Yup.object().shape({
    contactFormName: Yup.string()
      .min(2, 'Podane imię jest za krótkie')
      .max(50, 'Podane imię jest za długie')
      .required('Wpisz imię'),
    contactFormEmail: Yup.string()
      .email('Wpisz poprawny adres email')
      .required('Wpisz adres email'),
    contactFormMessage: Yup.string()
      .min(10, 'Wiadomość jest za krótka')
      .max(2000, 'Wiadomość jest za długa')
      .required('Wpisz wiadomość'),
  });
  const formik = useFormik({
    initialValues: {
      contactFormName: '',
      contactFormEmail: '',
      contactFormMessage: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      const api = process.env.GATSBY_CONTACT_FORM_API;
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
    <SectionContainer>
      <FormContainer>
        <Wrapper>
          <Form onSubmit={formik.handleSubmit} pattern="contactForm">
            <div>
              <label htmlFor="contactFormName">
                <div>Imię</div>
                <span>{formik.errors.contactFormName}</span>
                <input
                  id="contactFormName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.contactFormName}
                />
              </label>
            </div>
            <div>
              <label htmlFor="contactFormEmail">
                <div>Adres email</div>
                <span>{formik.errors.contactFormEmail}</span>
                <input
                  id="contactFormEmail"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.contactFormEmail}
                />
              </label>
            </div>
            <div>
              <label htmlFor="contactFormMessage">
                <div>Jak możemy Ci pomóc?</div>
                <span>{formik.errors.contactFormMessage}</span>
                <textarea
                  id="contactFormMessage"
                  onChange={formik.handleChange}
                  value={formik.values.contactFormMessage}
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
          <FormImageContainer>
            <Image
              src="/illustrations/paper-plane.svg"
              alt="wyślij wiadomość"
            />
          </FormImageContainer>
        </Wrapper>
      </FormContainer>
    </SectionContainer>
  );
};

export default ContactFormSection;
