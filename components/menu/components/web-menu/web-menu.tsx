import { Menu } from "@headlessui/react";
import { MenuItemModel } from "../../../../common/models/menu-item.model";
import MenuItem from "../menu-item/menu-item";

export default function WebMenu({
  menuItems,
  className,
}: {
  menuItems: MenuItemModel[];
  className?: string | undefined;
}) {
  return (
    <Menu className={className + " p-5"} as="div">
      <MenuItem href={"/"}>WEB</MenuItem>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={"webMenu" + index} href={menuItem.href}>
          {menuItem.text}
        </MenuItem>
      ))}
    </Menu>
  );
}
