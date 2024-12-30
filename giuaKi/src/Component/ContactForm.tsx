import React, { useState } from "react";
import { useContactContext } from "./Context";

const ContactForm: React.FC = () => {
  const { addContact } = useContactContext();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    addContact({ id: Date.now(), name, phone });
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="text-lg ml-3.5 border-yellow-600"
        type="text"
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className="text-lg border-yellow-600"
        type="text"
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit" className="text-lg bg-orange-500">Thêm</button>
    </form>
  );
};

export default ContactForm;
