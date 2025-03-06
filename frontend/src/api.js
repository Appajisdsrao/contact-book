export const getContacts = async () => {
    const response = await fetch("http://localhost:5000/contacts");
    return response.json();
  };
  
  export const addContact = async (contact) => {
    const response = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    return response.json();
  };
  
  export const deleteContact = async (id) => {
    await fetch(`http://localhost:5000/contacts/${id}`, { method: "DELETE" });
  };
  