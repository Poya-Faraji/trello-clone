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

import Button from "@/components/Button/Button";
import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/lists-context";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListItemModal.module.css";

type Values = Omit<ListItemType, "id">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex: number;
  itemIndex?: number;
  defaultValues: Partial<Values>;
};

export default function ListItemModal({
  modalRef,
  listIndex,
  itemIndex,
  defaultValues,
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (itemIndex === undefined) {
      return;
    }

    dispatchList({ type: "item_removed", itemIndex, listIndex });
    toast.success("Item removed successfully");

    modalRef.current?.close();
  };

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

    if (itemIndex !== undefined) {
      dispatchList({ type: "item_edited", listIndex, itemIndex, item: values });
      toast.success("Item edited successfully");
      modalRef.current?.close();
    } else {
      const id = crypto.randomUUID();

      dispatchList({
        type: "item_created",
        listIndex,
        item: { id, ...values },
      });
      toast.success("Item added successfully");
      modalRef.current?.close();
    }
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
      heading={
        itemIndex !== undefined ? "Edit existing item" : "Create new Item"
      }
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      extraActions={
        itemIndex !== undefined && (
          <Button
            onClick={handleRemoveButtonClick}
            type="button"
            variant="text"
            color="danger"
          >
            Remove
          </Button>
        )
      }
    >
      <TextInput
        label="Title"
        name="title"
        defaultValue={defaultValues?.title}
        error={titleError}
      />
      <TextArea
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
      />
      <TextInput
        label="Due Date"
        type="date"
        name="date"
        defaultValue={defaultValues?.dueDate}
      />
    </FormModal>
  );
}
