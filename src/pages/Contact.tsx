import React from 'react';
import HeroContact from '@/components/Contact/HeroContact';
import ContactDetails from '@/components/Contact/ContactDetails';
import Form from '@/components/Contact/Form';
import GoogleMap from '@/components/Contact/GoogleMap';

function Contact() {
  return (
    <>
      <HeroContact />
      <ContactDetails />
      <GoogleMap />
      <Form />
    </>
  );
}

export default Contact;
