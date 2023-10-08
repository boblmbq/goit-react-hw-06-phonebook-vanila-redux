import { customAlphabet } from 'nanoid';
import { CONTACT_ADD, CONTACT_DELETE, FILTER } from './actionTypes';

const id = customAlphabet('1234567890', 4);

export const addContact = (name, number) => {
  return {
    type: CONTACT_ADD,
    payload: { contact: { name, number, id: id() } },
  };
};

export const deleteContact = id => {
  return { type: CONTACT_DELETE, payload: { id } };
};

export const addFilter = filter => {
  return { type: FILTER, payload: { filter } };
};
