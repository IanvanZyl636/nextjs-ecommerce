import { useCallback, useEffect, useState } from "react";
import { fromEvent, throttleTime } from "rxjs";
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
  const [isWebMenuActive, setIsWebMenuActive] = useState(false);

  const handleResize = useCallback(() => {
    const windowWidth = window?.innerWidth;

    if (!windowWidth && windowWidth !== 0) {
      return;
    }

    if (windowWidth >= 768) {
      setIsWebMenuActive(true);
      return;
    }

    setIsWebMenuActive(false);
  }, []);

  useEffect(() => {
    handleResize();

    const sub = fromEvent(window, "resize")
      .pipe(throttleTime(200))
      .subscribe(handleResize);

    return () => {
      sub.unsubscribe();
    };
  }, [handleResize]);

  return (
    <>
      {isWebMenuActive === true ? (
        <WebMenu menuItems={menuItems}></WebMenu>
      ) : (
        <MobileMenu menuItems={menuItems}></MobileMenu>
      )}
    </>
  );
}
