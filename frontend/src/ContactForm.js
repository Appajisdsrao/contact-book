import { useState } from "react";

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    onAdd({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <div className="bg-blue-200 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">Add Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input className="p-2 border rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="p-2 border rounded" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button className="bg-green-500 text-white py-2 rounded" type="submit">Add Contact</button>
      </form>
    </div>
  );
};
export default ContactForm;
