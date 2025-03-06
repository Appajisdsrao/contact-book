const ContactList = ({ contacts, onDelete }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-bold">Contacts</h2>
        {contacts.length === 0 && <p>No contacts available.</p>}
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="flex justify-between items-center p-2 border-b">
              <span>{contact.name} - {contact.phone}</span>
              <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default ContactList;
  