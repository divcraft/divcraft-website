import React from 'react';
import { Wrapper, Image, Button, Form } from 'components';
import { SectionContainer, FormContainer, FormImageContainer } from './style';

const ContactFormSection = () => {
  return (
    <SectionContainer>
      <FormContainer>
        <Wrapper>
          <Form pattern="contactForm">
            <div>
              <label htmlFor="contactFormName">
                <div>Imię</div>
                <input id="contactFormName" type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="contactFormEmail">
                <div>Adres email</div>
                <input id="contactFormEmail" type="email" />
              </label>
            </div>
            <div>
              <label htmlFor="contactFormText">
                <div>Jak możemy Ci pomóc?</div>
                <textarea id="contactFormText" />
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
