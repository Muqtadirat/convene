// import * as yup from "yup";
// import { useForm, FormProvider } from "react-hook-form";
import styles from "./Form.module.css";

const Form = ({ action, children, method, onSubmit }) => {
  // const methods = useForm();

  return (
    <form
      action={action}
      method={method}
      onSubmit={onSubmit}
      className={styles.form}
    >
      {children}
    </form>
    // <FormProvider {...methods}>
    //   <form
    //     action={action}
    //     method={method}
    //     onSubmit={onSubmit}
    //     noValidate
    //     className={styles.form}
    //   >
    //     {children}
    //   </form>
    // </FormProvider>
  );
};
export default Form;
