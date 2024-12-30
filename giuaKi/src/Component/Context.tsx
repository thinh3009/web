
import React, { createContext, useContext, useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactContextProps {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (id: number, updatedContact: Contact) => void;
  deleteContact: (id: number) => void;
}

const ContactContext = createContext<ContactContextProps | undefined>(undefined);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => setContacts([...contacts, contact]);

  const updateContact = (id: number, updatedContact: Contact) =>
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      )
    );

  const deleteContact = (id: number) =>
    setContacts(contacts.filter((contact) => contact.id !== id));

  return (
    <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) throw new Error("useContactContext must be used within a ContactProvider");
  return context;
};
