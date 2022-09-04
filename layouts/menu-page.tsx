import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { ReactElement } from "react";
import CarouselSlider from "../components/carousel-slider/carousel-slider";

export default function MenuPage({ children }: { children: ReactElement }) {
  return (
    <>
      <Menu></Menu>

      <CarouselSlider></CarouselSlider>

      {children}

      <Footer></Footer>
    </>
  );
}
