import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { getContacts, addContact, deleteContact } from "./api";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  const handleAddContact = async (contact) => {
    const newContact = await addContact(contact);
    setContacts([...contacts, newContact.contact]);
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center">Contact Book</h1>
      <ContactForm onAdd={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}
export default App;
