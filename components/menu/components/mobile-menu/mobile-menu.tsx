import { Menu } from "@headlessui/react";
import { MenuItemModel } from "../../../../common/models/menu-item.model";
import MenuItem from "../menu-item/menu-item";

export default function MobileMenu({
  menuItems,
  className,
}: {
  menuItems: MenuItemModel[];
  className?: string | undefined;
}) {
  return (
    <Menu className={className + " p-10"} as="div">
      <MenuItem href={"/"}>MOBILE</MenuItem>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={"mobileMenu" + index} href={menuItem.href}>
          {menuItem.text}
        </MenuItem>
      ))}
    </Menu>
  );
}
