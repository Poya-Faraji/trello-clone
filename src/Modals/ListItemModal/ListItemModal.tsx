import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListItemType } from "@/Types/list-item";

import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/Board-context";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListItemModal.module.css";

type Values = Omit<ListItemType, "id">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex: number;
};

export default function ListItemModal({
  modalRef,
  listIndex,
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      dueDate: formData.get("date") as string,
    };

    if (!validateTitle(values.title)) {
      return;
    }

    const id = crypto.randomUUID();

    dispatchList({ type: "item_created", listIndex, item: { id, ...values } });
    toast.success("Item added successfully");
    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setTitleError(null);
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
    return true;
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-item-modal"])}
      heading="Create a New Item"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <TextInput label="Title" name="title" error={titleError} />
      <TextArea label="Description" name="description" />
      <TextInput label="Due Date" type="date" name="date" />
    </FormModal>
  );
}
