import styles from "./Button.module.css";
import clsx from "clsx";

const Button = ({
  variant,
  children,
  width,
  className,
  type,
  onClickHandler,
}) => {
  return (
    <button
      data-variant={variant}
      style={{ width: width }}
      type={type}
      onClick={onClickHandler}
      className={clsx(styles.btn, className)}
    >
      {children}
    </button>
  );
};

export default Button;
