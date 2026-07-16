import { type ReactNode } from "react";

import { useParams } from "react-router";

import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import TextInput from "@/components/TextInput/TextInput";

import { ListSchema } from "@/schemas/list-schema";

import { useKanbanStore } from "@/stores/kanban-store";
import { useModalStore } from "@/stores/modal-store";

import FormModal from "../FormModal/FormModal";

type Values = z.infer<typeof ListSchema>;

type Props = {
  listIndex?: number;
  defaultValues?: Values;
};

export default function ListModal({
  listIndex,
  defaultValues,
}: Props): ReactNode {
  const { boardId } = useParams();

  const createList = useKanbanStore((state) => state.createList);
  const editList = useKanbanStore((state) => state.editList);
  const removeList = useKanbanStore((state) => state.removeList);

  const closeModal = useModalStore((state) => state.closeModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(ListSchema),
  });

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }

    removeList(boardId, listIndex);
    toast.success("List removed successfully.");

    closeModal();
  };

  const handleFormSubmit = (values: Values): void => {
    if (listIndex !== undefined) {
      editList(boardId, listIndex, values);
      toast.success("List edited successfully.");
    } else {
      createList(boardId, values);
      toast.success("List item_created successfully.");
    }

    closeModal();
  };

  return (
    <FormModal
      heading={
        listIndex !== undefined ? "Edit Existing List" : "Create a New List"
      }
      onRemove={listIndex !== undefined && handleRemoveButtonClick}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <TextInput
        {...register("title")}
        label="Title"
        type="text"
        error={errors.title?.message}
      />
    </FormModal>
  );
}
