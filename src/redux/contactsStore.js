const { LIST_OF_CONTACTS } = require("constants/localeStorege");

function storagedValue() {
  const savedContactsList = localStorage.getItem(LIST_OF_CONTACTS);
  if (savedContactsList) return JSON.parse(savedContactsList);
  return [];
}


export const contactsStore = storagedValue();
