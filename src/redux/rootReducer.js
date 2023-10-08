import { contactsReducer } from './contactsReducer';
import { filterReducer } from './filterReducer';

const { combineReducers } = require('redux');

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
