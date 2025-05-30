import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contactArray = await readContacts();
  contactArray.pop();
  writeContacts(contactArray);
  return await readContacts();
};

removeLastContact();
console.log(await removeLastContact());
