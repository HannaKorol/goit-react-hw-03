import s from "./ContactList.module.css"

export default function ContactList(contacts, onDelete) {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item}>
              <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
