import styles from "../styles/Home.module.css";
import Image from "next/image";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { ReactElement } from "react";

export default function MenuSideMenuPage({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <div className={styles.container}>
      <Menu></Menu>

      <div>SIDE MENU</div>

      {children}

      <Footer></Footer>
    </div>
  );
}
