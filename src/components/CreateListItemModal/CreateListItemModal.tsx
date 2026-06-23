import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useEffect,
  useRef,
  useState,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import BoardContext from "@/context/Board-context";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";

import styles from "./CreateListItemModal.module.css";

type Props = Omit<ComponentProps<typeof Modal>, "heading" | "children"> & {
  listId: string;
};

export default function CreateListItemModal({
  className,
  ref,
  listId,
  ...otherProps
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { create } = use(BoardContext);
  const formRef = useRef<HTMLFormElement>(null);

  const handleModalClose = (): void => {
    formRef.current?.reset();
    setTitleError(null);
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // value of input that has a name attribute of title is being selected
    const title = formData.get("title") as string;
    const id = crypto.randomUUID();

    if (validateTitle(title) === false) {
      return;
    }

    create(listId, { id, title: title.trim() });
    ref.current?.close();
    toast.success("Item added successfully");
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.trim().length === 0) {
      setTitleError("Title cannot be empty");
      return false;
    }
    handleModalClose();
    return true;
  };

  const handleCancelButtonClick = (): void => {
    ref.current?.close();
  };

  useEffect(() => {
    const resetFrom = (e: KeyboardEvent): void => {
      if (e.code !== "Escape") {
        return;
      }
      ref.current?.close();
    };
    document.addEventListener("keydown", resetFrom);
    return (): void => {
      document.removeEventListener("keydown", resetFrom);
    };
  }, [ref]);

  return (
    <Modal
      ref={ref}
      className={clsx(styles["create-list-item-modal"], className)}
      heading="Create a New Item"
      onClose={handleModalClose}
      {...otherProps}
    >
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <TextInput label="Title" name="title" error={titleError} />
        <div className={styles.actions}>
          <Button onClick={handleCancelButtonClick} type="reset">
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
