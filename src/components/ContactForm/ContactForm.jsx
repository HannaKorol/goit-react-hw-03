import { useId } from "react"; // хук useId для створення унікальних ідентифікаторів полів. ("Елементи форми")
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId(); //!!!Не используйте Nano ID для генерации свойства key в JSX. При каждом рендере key будет разный, что плохо скажется на производительности.Для связи <input> и <label> лучше использовать useId, который был добавлен в React 18. (https://github.com/ai/nanoid/blob/main/README.ru.md)
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    //Функція відправки форми має два параметри: values - об'єкт значень полів форми в момент її відправки. actions - об'єкт з допоміжними методами. Наприклад, метод resetForm використовується для очищення полів форми після відправки.
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact); // Додаємо новий контакт
    console.log(values);
    actions.resetForm();
  };

  const regexPhoneNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be more than 3 characters")
      .max(50, "Must be no longer than 50 characters")
      .required("Required"),
    number: Yup.string()
      .min(3)
      .max(50)
      .matches(regexPhoneNumber, "Please enter a valid phone number")
      .required("Required"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        {(
          { values } //values - щоб зробити кнопку не активною коли немає номеру телефону чи имя
        ) => (
          <Form className={s.form}>
            <label htmlFor={nameFieldId} className={s.label}>
              <span> Name </span>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                className={s.input}
                placeholder="Ведіть імя"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={s.error}
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
              <ErrorMessage name="number" component="div" className={s.error} />
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

/* План використанння Formik
1) Встановити цю бібліотеку 
2) Імпортувати і використати <Formik></Formik>
3) Додати в середину Formik компонент Form
4) Створити довільну кількість Field 
5) Додати кнопку с типом submit
6) Створюємо initialValues та handleSubmit
7) Передаємо бажані поля в initialValues а також додаємо до всіх полів Field пропс name відповідно початкових станів
8) Передаємо у Formik обробник і початковий стан   <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}> */
