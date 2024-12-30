import React from "react";
import ContactItem from "./ContactItem";
import { useContactContext } from "./Context";

const ContactList: React.FC = () => {
  const { contacts } = useContactContext();

  return (
    <ul  className="text-lg">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
