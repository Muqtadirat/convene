import styles from "./Tooltip.module.css";

const Tooltip = ({ children, text }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltipText}>{text}</span>
    </div>
  );
};

export default Tooltip;
