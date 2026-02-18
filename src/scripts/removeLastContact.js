import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const currentData = await readContacts();
  //   if (currentData.length) return;
  writeContacts(currentData.slice(0, currentData.length - 1));
};

removeLastContact();
