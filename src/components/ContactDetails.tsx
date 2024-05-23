import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find(contact => contact.id === id)
  );

  if (!contact) return <div>Contact not found</div>;

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-semibold">{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default ContactDetails;
