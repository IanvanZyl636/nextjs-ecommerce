import { Menu as HLMenu } from "@headlessui/react";
import MenuItem from "./components/menu-item/menu-item";

export default function Menu() {
  return (
    <HLMenu>
      <MenuItem href={"/"}>Home</MenuItem>
      <MenuItem href={"/products"}>Products</MenuItem>
    </HLMenu>
  );
}
