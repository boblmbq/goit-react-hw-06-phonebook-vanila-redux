import { CONTACT_ADD, CONTACT_DELETE } from './actionTypes';
import { contactsStore } from './contactsStore';

export const contactsReducer = (state = contactsStore, { type, payload }) => {
  switch (type) {
    case CONTACT_ADD:
      return [...state, payload.contact];
    case CONTACT_DELETE:
      return state.filter(e => e.id !== payload.id);
    default:
      return state;
  }
};
