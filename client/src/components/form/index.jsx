import { Formik } from "formik";
import * as yup from "yup";
import styles from "./Form.module.css";

const Form = ({ action, children }) => {
  return (
    <Formik initialValues={""} validationSchema={formSchema}>
      {({ handleSubmit }) => (
        <form action={action} onSubmit={handleSubmit} className={styles.form}>
          {children}
        </form>
      )}
    </Formik>
  );
};

const defaultValues = {
  item: "",
  description: "",
};

const formSchema = yup.object({
  username: yup.string().min(5, "Too short"),
  // email: yup.string().email("Invalid email"),
  password: yup
    .string()
    .min(8)
    .matches(/[a-zA-Z]/)
    .matches(/[0-9]/),
});

//   return (
//     <form action={action} onSubmit={handleSubmit} className={styles.form}>
//       {children}
//     </form>
//   );
// };
export default Form;
