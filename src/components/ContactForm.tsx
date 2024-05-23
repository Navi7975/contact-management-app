import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactSlice';
import { nanoid } from 'nanoid';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ id: nanoid(), name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full px-4 py-2 border rounded-md"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="block w-full px-4 py-2 border rounded-md"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
