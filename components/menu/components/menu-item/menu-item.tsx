import { Menu } from "@headlessui/react";
import Link, { LinkProps } from "../../../link/link";

const MenuItem = ({ href, children }: LinkProps) => {
  return (
    <Menu.Item>
      <Link href={href}>{children}</Link>
    </Menu.Item>
  );
};

export default MenuItem;
