// import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const currentData = await readContacts();
  const newRecord = createFakeContact();
  writeContacts([...currentData, newRecord]);
};

addOneContact();
