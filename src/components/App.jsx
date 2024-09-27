import initialContacts from "./contacts.json";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useState } from "react";

export default function App() {
    const [contacts, setContacts] = useState(initialContacts); //оголосили стан компонента
    const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    }); // prevContacts - is the initial state of the useState at the moment of reloading/adding new value;
  }; // Функція зміни стану

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId );
    });
  };

    const visibleContacts = contacts.filter((contact) => contact.text.toLowerCase().includes(filter.toLowerCase()));
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    );
};
