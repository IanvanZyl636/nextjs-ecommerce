import { Menu, Transition } from "@headlessui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { debounceTime, fromEvent, sampleTime, throttleTime } from "rxjs";
import { MenuItemModel } from "../../../../common/models/menu-item.model";
import MenuItem from "../menu-item/menu-item";

export default function WebMenu({
  menuItems,
  className,
}: {
  menuItems: MenuItemModel[];
  className?: string | undefined;
}) {
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const [menuTransition, setMenuTransition] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [prevScroll, setPrevScroll] = useState(999);

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

  useEffect(() => {
    const sub = fromEvent(window, "scroll")
      .pipe(sampleTime(50))
      .subscribe(handleScroll);

    return () => {
      sub.unsubscribe();
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }

    setPlaceholderHeight(ref.current.clientHeight);
  }, []);

  return (
    <div className={className}>
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
        <Menu className="p-5" as="div">
          <MenuItem href={"/"}>WEB</MenuItem>
          {menuItems.map((menuItem, index) => (
            <MenuItem key={"webMenu" + index} href={menuItem.href}>
              {menuItem.text}
            </MenuItem>
          ))}
        </Menu>
      </Transition>
    </div>
  );
}
