import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  // const currentData = await readContacts();
  // currentData.push(...updatedContacts);
  const data = fs.writeFile(
    PATH_DB,
    JSON.stringify(updatedContacts, null, 2),
    'utf8',
  );
  return data;
};
