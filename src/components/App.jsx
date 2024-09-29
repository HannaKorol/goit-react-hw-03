import initialContacts from "./contacts.json";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useEffect, useState } from "react";

export default function App() {
  const [filter, setFilter] = useState("");

  //Отримання контактів з локального сховища
  const getContacts = () => {
    const savedContacts = localStorage.getItem("saved-contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts); // розбір значення масиву обєктів за допомогою JSON.parse
    }
    return initialContacts;
  };

  const [contacts, setContacts] = useState(getContacts); //оголосили стан компонента

  //Запис значення полів форми до локального сховища
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts)); //перетворити збережене значення у рядок за допомогою JSON.stringify.
  }, [contacts]);

  //Додавання нових контактів
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    }); // prevContacts - is the initial state of the useState at the moment of reloading/adding new value;
  }; // Функція зміни стану

  //Видалення контактів по ID
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  //
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes((filter || "").toLowerCase())
  );

  return (
    <div>
      <h1 style={{ padding: "20px" }}>Phonebook</h1> 
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
