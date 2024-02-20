import { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "src/lib/data";
import { FullLogo, Logo, Hamburger } from "src/icons";
import Button from "../shared/buttons";
import styles from "./NavBar.module.css";
import clsx from "clsx";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={clsx(styles.nav)}>
      <div className="logo">
        <Link to="/" rel="noopener noreferrer">
          {!openMenu? <FullLogo /> : <Logo />}
        </Link>
      </div>

      <div className={styles.hamburger} onClick={handleOpenMenu}>
        <Hamburger />
      </div>

      <div className={clsx(styles.navList, { [styles.active]: openMenu })}>
        <ul>
          {NavItems.map((NavItem, index) => {
            const { title, href, isButton } = NavItem;

            if (isButton === true) {
              return (
                <li key={index}>
                  <Link to={href} target="_self" rel="noopener noreferrer">
                    <Button>{title}</Button>
                  </Link>
                </li>
              );
            }

            return (
              <li key={index}>
                <Link
                  to={href}
                  target="_self"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
