import React from 'react';
import { Wrapper, Image, Button } from 'components';
import {
  SectionContainer,
  FormContainer,
  Form,
  FormItem,
  FormLabel,
  FormInput,
  FormTextarea,
  FormImageContainer,
} from './style';

const ContactFormSection = () => {
  return (
    <SectionContainer>
      <FormContainer>
        <Wrapper>
          <Form noValidate="novalidate">
            <FormItem>
              <FormLabel htmlFor="name">
                <div>Imię</div>
                <FormInput id="name" type="text" />
              </FormLabel>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="email">
                <div>Adres email</div>
                <FormInput id="email" type="email" />
              </FormLabel>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="text">
                <div>Jak możemy Ci pomóc?</div>
                <FormTextarea id="text" />
              </FormLabel>
            </FormItem>
            <FormItem>
              <Button
                type="submit"
                onClick={e => e.preventDefault()}
                pattern="button"
              >
                Wyślij
              </Button>
            </FormItem>
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
