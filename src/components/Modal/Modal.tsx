import { type ComponentProps, type ReactNode, type RefObject } from "react";

import clsx from "clsx";

import MingcuteCloseLine from "@/icons/MingcuteCloseLine";

import IconsButton from "../IconButton/IconsButton";

import styles from "./Modal.module.css";

type Props = ComponentProps<"dialog"> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
};

export default function Modal({
  className,
  heading,
  ref,
  children,
  ...otherProps
}: Props): ReactNode {
  const handleCloseModalButtonClick = (): void => {
    ref.current?.close();
  };

  return (
    <dialog ref={ref} className={clsx(styles.modal, className)} {...otherProps}>
      <header>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.actions}>
          <IconsButton onClick={handleCloseModalButtonClick}>
            <MingcuteCloseLine />
          </IconsButton>
        </div>
      </header>
      <main>{children}</main>
    </dialog>
  );
}
