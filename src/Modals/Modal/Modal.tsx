import {
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";

import clsx from "clsx";

import MingcuteCloseLine from "@/icons/MingcuteCloseLine";

import IconsButton from "../../components/IconButton/IconsButton";

import styles from "./Modal.module.css";

type Props = ComponentProps<"dialog"> & {
  heading: string;
  contentClassName?: string;
  ref: RefObject<HTMLDialogElement | null>;
};

export default function Modal({
  className,
  contentClassName,
  onClick,
  heading,
  ref,
  children,
  ...otherProps
}: Props): ReactNode {
  const handleCloseModalButtonClick = (): void => {
    ref.current?.close();
  };

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }
    onClick?.(e);
  };

  return (
    <dialog
      ref={ref}
      className={clsx(styles.modal, className)}
      onClick={handleDialogClick}
      {...otherProps}
    >
      <header>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.actions}>
          <IconsButton onClick={handleCloseModalButtonClick}>
            <MingcuteCloseLine />
          </IconsButton>
        </div>
      </header>
      <main className={contentClassName}>{children}</main>
    </dialog>
  );
}
