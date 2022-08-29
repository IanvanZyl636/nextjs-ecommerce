import { Menu } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { MenuItemModel } from "../../../../common/models/menu-item.model";
import MenuItem from "../menu-item/menu-item";

export default function MobileMenu({
  menuItems,
  className,
}: {
  menuItems: MenuItemModel[];
  className?: string | undefined;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }

    setPlaceholderHeight(ref.current.clientHeight);
  }, []);

  return (
    <div className={className}>
      <div style={{ paddingTop: placeholderHeight }}></div>
      <Menu ref={ref} className="fixed top-0 bg-white w-full p-10" as="div">
        <MenuItem href={"/"}>MOBILE</MenuItem>
        {menuItems.map((menuItem, index) => (
          <MenuItem key={"mobileMenu" + index} href={menuItem.href}>
            {menuItem.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
