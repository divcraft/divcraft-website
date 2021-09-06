import React from 'react';
import Layout from 'layouts';
import { ContactInfoSection, ContactFormSection } from 'templates';

const ContactPage = () => {
  return (
    <Layout>
      <ContactInfoSection />
      <ContactFormSection />
    </Layout>
  );
};

export default ContactPage;
