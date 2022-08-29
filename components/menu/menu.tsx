import { Menu as HLMenu, Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./components/menu-item/menu-item";

export default function Menu() {
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const [menuTransition, setMenuTransition] = useState(true);
  let prevScroll = 0;
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll >= prevScroll) {
      setMenuTransition(false);
    }

    if (currentScroll < prevScroll) {
      setMenuTransition(true);
    }

    prevScroll = window.scrollY;
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div style={{ marginTop: placeholderHeight }}></div>
      <Transition
        className="fixed top-0 bg-white w-full"
        show={menuTransition}
        enter="duration-[400ms]"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="duration-[400ms]"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <HLMenu ref={ref} as="div">
          <MenuItem href={"/"}>Home</MenuItem>
          <MenuItem href={"/products"}>Products</MenuItem>
        </HLMenu>
      </Transition>
    </>
  );
}
