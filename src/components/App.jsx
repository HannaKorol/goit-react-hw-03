import contacts from "./contacts.json";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(contacts); //стан

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    }); // prevContacts - is the initial state of the useState at the moment of reloading/adding new value;
  }; // Функція зміни стану

    const deleteContact = (contactID) => {

    }
    
    
  <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      {/* new value of the reloading of the useState is provided  */}
      <SearchBox />
      <ContactList contacts={contacts} onDelete={deleteTask} />
      {/* a new props is shown here at the mament of the useState reloading  */}
  </div>;
}
