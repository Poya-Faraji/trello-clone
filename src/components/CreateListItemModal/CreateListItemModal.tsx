import {
  type ChangeEvent,
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
  const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const shouldValidateOnChange = useRef<boolean>(false);

  const { create } = use(BoardContext);

  const handleModalClose = (): void => {
    setTitleError(null);
    formRef.current?.reset();
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // value of input that has a name attribute of title is being selected
    shouldValidateOnChange.current = true;

    if (!validateTitle(title)) {
      return;
    }

    const id = crypto.randomUUID();

    create(listId, { id, title: title });
    ref.current?.close();
    toast.success("Item added successfully");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();

    if (shouldValidateOnChange.current) {
      validateTitle(value);
    }
    setTitle(value);
  };

  const handleFormReset = (): void => {
    setTitle("");
    shouldValidateOnChange.current = false;
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be a string");
      return false;
    }
    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
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
      <form ref={formRef} onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <TextInput
          value={title}
          label="Title"
          name="title"
          error={titleError}
          onChange={handleTitleChange}
        />
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
