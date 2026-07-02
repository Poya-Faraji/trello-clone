import { type ComponentProps, type ReactNode, use } from "react";

import { useNavigate } from "react-router";

import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import clsx from "clsx";

import ColorInput from "@/components/ColorInput/ColorInput";
import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/board-context";

import { BoardSchema } from "@/schemas/board-schema";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: zodResolver(BoardSchema) });

  const navigate = useNavigate();

  const { dispatchBoards } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (boardId === undefined) {
      return;
    }

    dispatchBoards({ type: "board_removed", boardId });
    toast.success("Board removed successfully");

    modalRef.current?.close();

    navigate("/");
  };

  const handleFormSubmit = (values: Values): void => {
    if (boardId !== undefined) {
      dispatchBoards({ type: "board_edited", boardId, board: values });
      toast.success("Board edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchBoards({
        type: "board_created",
        board: { id, lists: [], ...values },
      });
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

      <ColorInput
        {...register("color")}
        label="Color"
        error={errors.color?.message}
      />
    </FormModal>
  );
}
