import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import { z } from "zod";

import clsx from "clsx";

import Button from "@/components/Button/Button";
import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/lists-context";

import { ListItemSchema } from "@/schemas/list-item-schema";

import type { ListItemType } from "@/types/list-item";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListItemModal.module.css";

type Errors = { [key in keyof Values]?: string[] };

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
  const [errors, setErrors] = useState<Errors>({});

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

    const { data, error } = ListItemSchema.safeParse(values);
    if (error) {
      setErrors(z.flattenError(error).fieldErrors);
      return;
    }

    if (itemIndex !== undefined) {
      dispatchList({ type: "item_edited", listIndex, itemIndex, item: data });
      toast.success("Item edited successfully");
      modalRef.current?.close();
    } else {
      const id = crypto.randomUUID();

      dispatchList({
        type: "item_created",
        listIndex,
        item: { id, ...data },
      });
      toast.success("Item added successfully");
      modalRef.current?.close();
    }
  };

  const handleFormReset = (): void => {
    setErrors({});
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
        error={errors.title?.[0]}
      />
      <TextArea
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
        error={errors.description?.[0]}
      />
      <TextInput
        label="Due Date"
        type="date"
        name="date"
        defaultValue={defaultValues?.dueDate}
        error={errors.dueDate?.[0]}
      />
    </FormModal>
  );
}
