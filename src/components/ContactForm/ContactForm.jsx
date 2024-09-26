import s from "./ContactForm.module.css"

export default function ContactForm( onAdd ) {

    const handleSubmit = e => {
        e.preventdefault();
        onAdd({
            id: Date.now(),
            name: e.target.elements.username.value,
            number: e.target.elements.number.value
        });
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username"/>
            <input type="text" name="number" />
            <button type="submit">Add contact</button>
        </form>
    )

}