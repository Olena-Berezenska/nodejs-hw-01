import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

import { fileURLToPath } from 'node:url';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
};
const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] === __filename) {
  const arg = Number(process.argv[2]) || 1;
  generateContacts(arg);
}
