import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const ContactsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
