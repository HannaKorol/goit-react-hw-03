
import s from "./Contact.module.css";

export default function Contact({ name: { name }, number: {number}, id, onDelete }) {
  return (
    <div className={s.wrapper}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
