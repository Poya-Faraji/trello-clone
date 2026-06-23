import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";

import styles from "./CreateListItemModal.module.css";

type Props = Omit<ComponentProps<typeof Modal>, "heading" | "children">;

export default function CreateListItemModal({
  className,
  ref,
  ...otherProps
}: Props): ReactNode {
  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      {...otherProps}
    >
      <form>
        <TextInput label="Title" />
        <div className={styles.actions}>
          <Button type="button">Cancel</Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
