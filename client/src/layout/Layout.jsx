import SideBar from "src/components/navigation/SideBar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
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
