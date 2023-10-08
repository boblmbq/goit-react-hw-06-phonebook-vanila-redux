import { LIST_OF_CONTACTS } from 'constants/localeStorege';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getContacts, getFitler } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFitler);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(LIST_OF_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = () =>
    contacts.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <ul>
      {filteredContacts().map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
