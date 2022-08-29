import { forwardRef, LegacyRef, ReactElement } from "react";
import NextLink from "next/link";
import { Url } from "../../common/types/url";

export declare type LinkProps = {
  href: Url;
  children: ReactElement | string;
};

const Link = forwardRef(
  (
    { href, children }: LinkProps,
    ref: LegacyRef<HTMLAnchorElement> | undefined
  ) => {
    return (
      <NextLink href={href}>
        <a ref={ref}>{children}</a>
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
