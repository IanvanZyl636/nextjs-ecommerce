import { Transition } from "@headlessui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { MenuItemModel } from "../../common/models/menu-item.model";
import MobileMenu from "./components/mobile-menu/mobile-menu";
import WebMenu from "./components/web-menu/web-menu";

const menuItems: MenuItemModel[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/products",
    text: "Products",
  },
];

export default function Menu() {
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const [menuTransition, setMenuTransition] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [prevScroll, setPrevScroll] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;

    if (currentScroll >= prevScroll && currentScroll >= placeholderHeight) {
      setMenuTransition(false);
    }

    if (currentScroll < prevScroll) {
      setMenuTransition(true);
    }

    setPrevScroll(window.scrollY);
  }, [placeholderHeight, prevScroll]);

  const handleResize = useCallback(() => {
    if (!ref || !ref.current) {
      return;
    }

    setPlaceholderHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <div style={{ paddingTop: placeholderHeight }}></div>

      <Transition
        ref={ref}
        className="fixed top-0 bg-white w-full"
        show={menuTransition}
        enter="duration-[400ms]"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="duration-[400ms]"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <MobileMenu
          className="block md:hidden"
          menuItems={menuItems}
        ></MobileMenu>
        <WebMenu className="hidden md:block" menuItems={menuItems}></WebMenu>
      </Transition>
    </>
  );
}
