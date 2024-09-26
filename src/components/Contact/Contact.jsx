import s from "./Contact.module.css";

export default function Contact(name: { userName, id }, number: {number}, onDelete ) {
    return (
      <div>
        <p>{userName}</p>
        <p>{number}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    );
}