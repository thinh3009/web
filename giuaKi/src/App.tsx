import React from "react";
import { ContactProvider } from "./Component/Context";
import ContactForm from "./Component/ContactForm";
import ContactList from "./Component/ContactList";

const App: React.FC = () => {
  return (
    <ContactProvider>
      <div className=" mb-60 ml-96">
        <h1 className="bg-slate-300 p-10 rounded-b-3xl rounded-tl-3xl rounded-tr-3xl mb-2.5">Quản lý danh bạ</h1>
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default App;
