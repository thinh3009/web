import React, { useState } from "react";
import { useContactContext } from "./Context";

interface ContactProps {
  contact: { id: number; name: string; phone: string };
}

const ContactItem: React.FC<ContactProps> = ({ contact }) => {
  const { updateContact, deleteContact } = useContactContext();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

  const handleUpdate = () => {
    updateContact(contact.id, { id: contact.id, name, phone });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleUpdate} className="bg-green-500 mx-4">Lưu</button>
          <button onClick={() => setIsEditing(false)} className="bg-red-600">Hủy</button>
        </>
      ) : (
        <>
          <span>{contact.name} - {contact.phone}</span>
          <button onClick={() => setIsEditing(true)} className="bg-lime-400 mx-4">Sửa</button>
          <button onClick={() => deleteContact(contact.id)} className="bg-yellow-400">Xóa</button>
        </>
      )}
    </li>
  );
};

export default ContactItem;
