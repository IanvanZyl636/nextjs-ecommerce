import styles from "../styles/Home.module.css";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { ReactElement } from "react";

export default function MenuPage({ children }: { children: ReactElement }) {
  return (
    <div className={styles.container}>
      <Menu></Menu>

      {children}

      <Footer></Footer>
    </div>
  );
}
