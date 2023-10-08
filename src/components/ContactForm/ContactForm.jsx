import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';

const LABEL_IDS = {
  nameId: nanoid(),
  numberId: nanoid(),
};
const { nameId, numberId } = LABEL_IDS;

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const formElements = e.target.elements;
    const name = formElements.name.value;
    const number = formElements.number.value;

    if (contacts.some(e => e.name === name)) {
      alert('this contact is allready exist, please add a new one');
      return;
    }

    dispatch(addContact(name, number));
    

    e.target.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        className={css.input}
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        id={numberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
