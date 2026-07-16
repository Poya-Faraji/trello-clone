import { type ComponentProps, type ReactNode } from "react";

import Button from "@/components/Button/Button.tsx";

import Modal from "@/modals/Modal/Modal";

import { useModalStore } from "@/stores/modal-store.ts";

import styles from "./FormModal.module.css";

type ModalProps = Pick<ComponentProps<typeof Modal>, "heading">;

type FormProps = ComponentProps<"form"> & {
  onRemove?: false | (() => void);
};

type Props = ModalProps & FormProps;

export default function FormModal({
  heading,
  onRemove,
  children,
  ...otherProps
}: Props): ReactNode {
  const closeModal = useModalStore((state) => state.closeModal);

  const handleCancelButtonClick = (): void => {
    closeModal();
  };

  return (
    <Modal contentClassName={styles["form-modal"]} heading={heading}>
      <form {...otherProps}>
        {children}

        <div className={styles.actions}>
          {onRemove && (
            <Button
              type="button"
              variant="text"
              color="danger"
              onClick={onRemove}
            >
              Remove
            </Button>
          )}

          <Button
            className={styles.cancel}
            type="button"
            onClick={handleCancelButtonClick}
          >
            Cancel
          </Button>

          <Button type="submit" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
}
