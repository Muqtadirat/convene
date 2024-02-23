// import { SidebarItems } from "src/lib/data";
// import {
//   AlterFullLogo,
//   DoubleLeftArrow,
//   DoubleRightArrow,
//   Exit,
//   Headset,
//   Gear,
// } from "src/icons";
// import { Link } from "react-router-dom";
// import clsx from "clsx";
// import styles from "./SideBar.module.css";

// const SideBar = () => {
//   return (
//     <aside className={styles.sidebar}>
//       <div className={styles.logoBox}>
//         <AlterFullLogo />
//         <DoubleRightArrow />
//       </div>

//       <section className={styles.sidebarItems}>
//         <div className={styles.menu}>
//           <ul>
//             {SidebarItems.map((SidebarItem, index) => {
//               const { title, href, Icon } = SidebarItem;

//               return (
//                 <li key={index}>
//                   <Link
//                     to={href}
//                     target="_self"
//                     rel="noopener noreferrer"
//                     className={styles.link}
//                   >
//                     <div className={styles.listItem}>
//                       <Icon className={styles.icon} />
//                       <p>{title}</p>
//                     </div>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <div className={styles.control}>
//           <div className={styles.profile}>
//             <Link to="/profile" className={styles.link}>
//               <p>Username</p>
//               <p>Click for profile</p>
//             </Link>
//           </div>

//           <ul className={styles.controlList}>
//             <li>
//               <Headset /> <p>Support</p>
//             </li>
//             <Link to="/settings" className={styles.link}>
//               <li>
//                 <Gear /> <p>Settings</p>
//               </li>
//             </Link>

//             <Link to="/" className={styles.link}>
//               <li className={styles.logOut}>
//                 <p>Log Out</p> <Exit />
//               </li>
//             </Link>
//           </ul>
//         </div>
//       </section>
//     </aside>
//   );
// };

// export default SideBar;

import { useState } from "react";
import {
  AppShell,
  Stack,
  NavLink,
  Paper,
  Avatar,
  Text,
  Anchor,
  Space,
} from "@mantine/core";
import { Exit, Headset, Gear } from "src/icons";
import { SidebarItems } from "src/lib/data";
import styles from "./SideBar.module.css";
import { useHover } from "@mantine/hooks";

const SideBar = () => {
  const [active, setActive] = useState(0);
  const { hovered, ref } = useHover();

  return (
    <AppShell.Navbar p="md">
      <Stack>
        <>
          {SidebarItems.map((SidebarItem, index) => {
            const { label, href, Icon } = SidebarItem;

            return (
              <NavLink
                c="dark"
                key={index}
                href={href}
                label={label}
                leftSection={<Icon />}
                active={active === index}
                onClick={() => setActive(index)}
              ></NavLink>
            );
          })}
        </>

        <Space h="xl" />

        <Stack>
          <Paper
            shadow="lg"
            radius="md"
            withBorder
            py="xs"
            ref={ref}
            bg={hovered ? "teal" : ""}
          >
            <Anchor href="/profile" c="dark" underline="never">
              <Avatar
                src="https://i.pinimg.com/564x/bd/48/e2/bd48e2e8011edf036313e8b4d876d864.jpg"
                size={50}
                mx="auto"
              />
              <Text ta="center">Taddy</Text>
            </Anchor>
          </Paper>
          <NavLink
            c="dark"
            href="/"
            label="Support"
            leftSection={<Headset />}
          />
          <NavLink
            c="dark"
            href="/settings"
            label="Settings"
            leftSection={<Gear />}
          />

          <NavLink c="dark" href="/" label="Log Out" rightSection={<Exit />} />
        </Stack>
      </Stack>
    </AppShell.Navbar>
  );
};

export default SideBar;
