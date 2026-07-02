import { type ComponentProps, type ReactNode, use } from "react";

import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import clsx from "clsx";

import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/lists-context";

import { ListItemSchema } from "@/schemas/list-item-schema";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListItemModal.module.css";

type Values = z.infer<typeof ListItemSchema>;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex: number;
  itemIndex?: number;
  defaultValues: Values;
};

export default function ListItemModal({
  modalRef,
  listIndex,
  itemIndex,
  defaultValues,
}: Props): ReactNode {
  const { dispatchList } = use(BoardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(ListItemSchema),
  });
  const handleRemoveButtonClick = (): void => {
    if (itemIndex === undefined) {
      return;
    }

    dispatchList({ type: "item_removed", itemIndex, listIndex });
    toast.success("Item removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (values: Values): void => {
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

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-item-modal"])}
      heading={
        itemIndex !== undefined ? "Edit existing item" : "Create new Item"
      }
      onSubmit={handleSubmit(handleFormSubmit)}
      onRemove={itemIndex !== undefined && handleRemoveButtonClick}
    >
      <TextInput
        {...register("title")}
        label="Title"
        error={errors.title?.message}
      />
      <TextArea
        {...register("description")}
        label="Description"
        error={errors.description?.message}
      />
      <TextInput
        {...register("dueDate")}
        label="Due Date"
        type="date"
        error={errors.dueDate?.message}
      />
    </FormModal>
  );
}
