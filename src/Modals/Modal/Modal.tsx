import {
  type ComponentProps,
  type PointerEvent,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

import clsx from "clsx";

import IconButton from "@/components/IconButton/IconButton";

import MingcuteCloseLine from "@/icons/MingcuteCloseLine";

import { useModalStore } from "@/stores/modal-store";

import styles from "./Modal.module.css";

type Props = ComponentProps<"dialog"> & {
  contentClassName?: string;
  heading: string;
};

export default function Modal({
  className,
  contentClassName,
  heading,
  children,
  onPointerDown,
  ...otherProps
}: Props): ReactNode {
  const closeModal = useModalStore((state) => state.closeModal);

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;

    if (!dialog) {
      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }

    const handleCancel = (event: Event): void => {
      event.preventDefault();
      closeModal();
    };

    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [closeModal]);

  const handleDialogPointerDown = (
    e: PointerEvent<HTMLDialogElement>,
  ): void => {
    if (e.target === e.currentTarget) {
      closeModal();
    } else {
      onPointerDown?.(e);
    }
  };

  const handleCloseButtonClick = (): void => {
    closeModal();
  };

  return (
    <dialog
      ref={ref}
      className={clsx(styles.modal, className)}
      onPointerDown={handleDialogPointerDown}
      {...otherProps}
    >
      <header>
        <div className={styles.heading}>{heading}</div>

        <div className={styles.actions}>
          <IconButton type="button" onClick={handleCloseButtonClick}>
            <MingcuteCloseLine />
          </IconButton>
        </div>
      </header>

      <main className={contentClassName}>{children}</main>
    </dialog>
  );
}
