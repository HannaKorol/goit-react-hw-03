import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const initialValues = {
    username: "",
    number: "",
  };
  const handleSubmit = (values, options) => console.log("values", values);
  options.resetForm();
  console.log(options);

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              name="username"
              className={s.input}
              placeholder="Ведіть імя"
            />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              name="number"
              className={s.input}
              placeholder="Ведіть номер"
            />
          </label>

          <button type="submit">Add contact</button>
        </Form>
        ;
      </Formik>
    </div>
  );
}

/* замість input ми використовуємо в Formik бібліотеці Field*/
/* Замість form використовуємо Form */
