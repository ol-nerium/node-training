import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const currentData = await readContacts();
  const newData = [];
  for (let i = 0; i < number; i += 1) {
    newData.push(createFakeContact());
  }
  const updatedContacts = [...currentData, ...newData];
  writeContacts(updatedContacts);
};

generateContacts(5);
