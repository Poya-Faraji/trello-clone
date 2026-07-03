import { type ComponentProps, type ReactNode } from "react";

import { useNavigate } from "react-router";

import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import clsx from "clsx";

import ColorInput from "@/components/ColorInput/ColorInput";
import TextArea from "@/components/TextArea/TextArea";

import { BoardSchema } from "@/schemas/board-schema";

import { useKanbanStore } from "@/stores/kanban-store";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./BoardModal.module.css";

type Values = z.infer<typeof BoardSchema>;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  boardId?: string;
  defaultValues?: Values;
};

export default function BoardModal({
  modalRef,
  boardId,
  defaultValues,
}: Props): ReactNode {
  const createBoard = useKanbanStore((state) => state.createBoard);
  const editBoard = useKanbanStore((state) => state.editBoard);
  const removeBoard = useKanbanStore((state) => state.removeBoard);

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues ?? { color: "blue" },
    resolver: zodResolver(BoardSchema),
  });

  const navigate = useNavigate();

  const handleRemoveButtonClick = (): void => {
    if (boardId === undefined) {
      return;
    }

    removeBoard(boardId);
    toast.success("Board removed successfully");

    modalRef.current?.close();
    navigate("/");
  };

  const handleFormSubmit = (values: Values): void => {
    if (boardId !== undefined) {
      editBoard(boardId, values);
      toast.success("Board edited successfully");
    } else {
      createBoard(values);
      toast.success("Board created successfully");
    }

    modalRef.current?.close();
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["board-modal"])}
      heading={
        boardId !== undefined ? "Edit existing board" : "Create a new board "
      }
      onClose={() => reset()}
      onSubmit={handleSubmit(handleFormSubmit)}
      onRemove={boardId !== undefined && handleRemoveButtonClick}
    >
      <TextInput
        {...register("title")}
        label="Title"
        name="title"
        error={errors.title?.message}
      />
      <TextArea
        {...register("description")}
        label="Description"
        name="description"
        error={errors.description?.message}
      />

      <Controller
        name="color"
        control={control}
        render={({ field }) => (
          <ColorInput {...field} label="Color" error={errors.color?.message} />
        )}
      />
      {/* or
   <Controller
        name="color"
        control={control}
        render={({ field }) => {
          return (
            <ColorInput
              {...field}
              label="Color"
              error={errors.color?.message}
            />
          );
        }}
      /> */}
    </FormModal>
  );
}
