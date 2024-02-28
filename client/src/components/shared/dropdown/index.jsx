import { useState } from "react";
import styles from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "src/icons";

const DropdownItem = ({ children, href, leftIcon, rightIcon }) => {
  return (
    <div className={styles.dropdownItem}>
      <Link to={href} className="link">
        <span>{leftIcon}</span>
        {children}
        <span>{rightIcon}</span>
      </Link>
    </div>
  );
};

const DropdownMenu = ({ items }) => {
  return (
    <div className={styles.dropdownMenu}>
      {items.map((item, index) => (
        <DropdownItem
          key={index}
          href={item.href}
          leftIcon={item.leftIcon}
          rightIcon={item.rightIcon}
        >
          {item.text}
        </DropdownItem>
      ))}
    </div>
  );
};

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown} onClick={() => setOpen(!open)}>
      <div className={styles.dropTitle}>
        {title} {open ? <ChevronRight /> : <ChevronDown />}
      </div>

      {open && <DropdownMenu items={items} />}
    </div>
  );
};

export default Dropdown;

{
  /* <select name={name} id={id}>
      <label htmlFor={name}>
        Drop
        <option value={value}>hi</option>
      </label>
    </select> */
}
