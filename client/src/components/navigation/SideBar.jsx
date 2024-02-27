import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarItems } from "src/lib/data";
import { Avatar, Tooltip } from "../shared";

import {
  DoubleLeftArrow,
  DoubleRightArrow,
  AlterFullLogo,
  Logo,
  Exit,
  Headset,
  Gear,
} from "src/icons";
import styles from "./SideBar.module.css";
import clsx from "clsx";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.sideBar}>
      <div className={clsx(styles.menu, { [styles.collapsed]: collapsed })}>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <div>{collapsed ? <Logo /> : <AlterFullLogo />}</div>

          <div>{!collapsed ? <DoubleLeftArrow /> : <DoubleRightArrow />}</div>
        </div>

        <div className={styles.menuGroup}>
          <section>
            <ul className={styles.menuList}>
              {SidebarItems.map((SidebarItem) => {
                const { title, href, Icon, subLink } = SidebarItem;

                return (
                  <Link to={href} key={title} className={styles.link}>
                    <Tooltip text={title}>
                      <li className={styles.menuItem}>
                        <span className={styles.menuIcon}>
                          <Icon />
                        </span>
                        <span className={styles.menuTitle}>{title}</span>

                        {/* {subLink && (
                  <ul className={styles.menuList}>
                    {subLink.map((item) => {
                      const { title, href, Icon } = item;

                      return (
                        <li className={styles.submenuItem} key={title}>
                          <Link to={href} className={styles.link}>
                            <span className={styles.menuIcon}>
                              <Icon />
                            </span>
                            <span className={styles.menuTitle}>{title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )} */}
                      </li>
                    </Tooltip>
                  </Link>
                );
              })}
            </ul>
          </section>

          <section>
            <div className={styles.profileCard}>
              <Link to="/profile" className={styles.link}>
                <Avatar
                  src="https://i.pinimg.com/564x/bd/48/e2/bd48e2e8011edf036313e8b4d876d864.jpg"
                  alt="Avatar image"
                  className={styles.profileCardAvatar}
                />

                <p>Username</p>
              </Link>
            </div>
            <ul className={styles.menuList}>
              <Link to="/support" className={styles.link}>
                <Tooltip text="Support">
                  <li className={styles.menuItem}>
                    <span className={styles.menuIcon}>
                      <Headset />
                    </span>
                    <span className={styles.menuTitle}>Support</span>
                  </li>
                </Tooltip>
              </Link>
              <Link to="/support" className={styles.link}>
                <Tooltip text="Settings">
                  <li className={styles.menuItem}>
                    <span className={styles.menuIcon}>
                      <Gear />
                    </span>
                    <span className={styles.menuTitle}>Settings</span>
                  </li>
                </Tooltip>
              </Link>
              <Link to="/" className={styles.link}>
                <Tooltip text="Log Out">
                  <li className={clsx(styles.menuItem, styles.exit)}>
                    <span className={styles.menuTitle}>Log Out</span>
                    <span className={styles.menuIcon}>
                      <Exit />
                    </span>
                  </li>
                </Tooltip>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
