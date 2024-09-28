import { useId } from "react"; // хук useId для створення унікальних ідентифікаторів полів. ("Елементи форми")
import { nanoid } from "nanoid";
import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    username: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    //Функція відправки форми має два параметри: values - об'єкт значень полів форми в момент її відправки. actions - об'єкт з допоміжними методами. Наприклад, метод resetForm використовується для очищення полів форми після відправки.
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
        {(
          { values } //values - щоб зробити кнопку не активною коли немає номеру телефону чи имя
        ) => (
          <Form className={s.form}>
            <label htmlFor={nameFieldId} className={s.label}>
              <span> Name </span>
              <Field
                type="text"
                name="username"
                id={nameFieldId}
                className={s.input}
                placeholder="Ведіть імя"
              />
            </label>
            <label htmlFor={numberFieldId} className={s.label}>
              <span>Number</span>
              <Field
                type="text"
                name="number"
                id={numberFieldId}
                className={s.input}
                placeholder="Ведіть номер"
              />
            </label> 
            <button disabled={!values.name && !values.number} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

/* замість input ми використовуємо в Formik бібліотеці Field*/
/* Замість form використовуємо Form */
