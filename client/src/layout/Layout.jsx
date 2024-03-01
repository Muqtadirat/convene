import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FullLogo } from "src/icons";
import SideBar from "src/components/navigation/SideBar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    // <AppShell
    //   navbar={{
    //     width: 200,
    //     breakpoint: "sm",
    //     collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
    //   }}
    //   header={{ height: { base: 60, md: 70, lg: 40 } }}
    // >
    //   <AppShell.Header>
    //     <Group h="100%" px="md">
    //       <Burger
    //         opened={mobileOpened}
    //         onClick={toggleMobile}
    //         hiddenFrom="sm"
    //         size="sm"
    //       />
    //       <Burger
    //         opened={desktopOpened}
    //         onClick={toggleDesktop}
    //         visibleFrom="sm"
    //         size="sm"
    //       />
    //       <FullLogo />
    //     </Group>
    //   </AppShell.Header>
    //   <SideBar />

    //   <AppShell.Main>{children}</AppShell.Main>
    // </AppShell>
    <div className={styles.layout}>
      <header className={styles.layoutHeader}>Head</header>
      
      <main className={styles.layoutMain}>{children} </main>
      <section className={styles.layoutSide}>
        <SideBar />
      </section>

      <footer className={styles.layoutFooter}>Footer</footer>
    </div>
  );
};

export default Layout;
