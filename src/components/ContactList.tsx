import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteContact } from '../store/contactSlice';
import { Link } from 'react-router-dom';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-4">
      {contacts.map(contact => (
        <li key={contact.id} className="flex justify-between items-center border p-4 rounded-md">
          <div>
            <h2 className="text-xl font-semibold">{contact.name}</h2>
            <p>{contact.phone}</p>
          </div>
          <div className="space-x-2">
            <Link to={`/contact/${contact.id}`} className="px-4 py-2 bg-green-500 text-white rounded-md">
              View
            </Link>
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
