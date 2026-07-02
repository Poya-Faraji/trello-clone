import {
  type ComponentProps,
  type ReactNode,
  type RefObject,
  useRef,
} from "react";

import Button from "../../components/Button/Button";
import Modal from "../Modal/Modal";

import styles from "./FormModal.module.css";

type ModalProps = {
  modalRef: ComponentProps<typeof Modal>["ref"];
  heading: ComponentProps<typeof Modal>["heading"];
};

type FormProps = Omit<ComponentProps<"form">, "ref"> & {
  formRef?: RefObject<HTMLFormElement | null>;
  onRemove?: false | (() => void);
};

type Props = ModalProps & FormProps;

export default function FormModal({
  modalRef,
  formRef,
  heading,
  onRemove,
  children,
  ...otherProps
}: Props): ReactNode {
  const internalFormRef = useRef<HTMLFormElement>(null);

  const handleModalClose = (): void => {
    modalRef.current?.close();
  };

  const handleCancelButtonClick = (): void => {
    modalRef.current?.close();
  };

  return (
    <Modal
      ref={modalRef}
      className={styles["form-modal"]}
      heading={heading}
      onClose={handleModalClose}
    >
      <form
        ref={(node) => {
          internalFormRef.current = node;
          if (formRef) {
            formRef.current = node;
          }
        }}
        {...otherProps}
      >
        {children}
        <div className={styles.actions}>
          {onRemove && (
            <Button
              onClick={onRemove}
              type="button"
              variant="text"
              color="danger"
            >
              Remove
            </Button>
          )}
          <Button
            className={styles.cancel}
            onClick={handleCancelButtonClick}
            type="reset"
          >
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
