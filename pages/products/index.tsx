import { ReactElement } from "react";
import MenuSideMenuPage from "../../layouts/menu-side_menu-page/menu-side_menu-page";
import { NextPageWithLayout } from "../_app";

const Products: NextPageWithLayout = () => {
  return <div>products</div>;
};

Products.getLayout = (page: ReactElement) => (
  <MenuSideMenuPage>{page}</MenuSideMenuPage>
);

export default Products;
