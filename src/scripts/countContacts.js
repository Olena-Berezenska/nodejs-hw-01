import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contactArray = await readContacts();
  return contactArray.length;
};

console.log(await countContacts());
