import styles from "./Input.module.css";

const Input = ({ variant, type, id, name, placeholder, label, onChangeHandler, value }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        data-variant={variant}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        required
        className={styles.input}
      />
      <label htmlFor={id}>{label}</label>
      <div className={styles.underline}></div>
    </div>
  );
};

export default Input;
