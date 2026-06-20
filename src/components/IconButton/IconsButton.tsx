import { memo, type ComponentProps, type ReactNode } from "react";

import clsx from "clsx";

import styles from "./IconsButton.module.css";

type Props = ComponentProps<"button"> & {
  variant?: "solid" | "outlined";
  color?: "default" | "primary";
};

// you can strict the children to just receive svgs for optimize or prenting bugs in the future.

const IconsButton = memo(function IconsButton({
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button className={clsx(styles["icon-button"], className)} {...otherProps}>
      {children}
    </button>
  );
})
export default IconsButton


