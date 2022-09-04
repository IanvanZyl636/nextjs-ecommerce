import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { ReactElement } from "react";

export default function MenuSideMenuPage({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <>
      <Menu></Menu>

      <div>SIDE MENU</div>

      {children}

      <Footer></Footer>
    </>
  );
}
