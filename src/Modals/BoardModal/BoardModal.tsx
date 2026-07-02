import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { useNavigate } from "react-router";

import { toast } from "react-toastify";

import { z } from "zod";

import clsx from "clsx";

import Button from "@/components/Button/Button";
import ColorInput from "@/components/ColorInput/ColorInput";
import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/board-context";

import { BoardSchema } from "@/schemas/board-schema";

import type { BoardColor, BoardType } from "@/types/board";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./BoardModal.module.css";

type Errors = { [key in keyof Values]?: string[] };

type Values = Omit<BoardType, "id" | "lists">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  boardId?: string;
  defaultValues?: Partial<Values>;
};

export default function BoardModal({
  modalRef,
  boardId,
  defaultValues,
}: Props): ReactNode {
  const [errors, setErrors] = useState<Errors>({});

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

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      color: formData.get("color") as BoardColor,
    };

    const { data, error } = BoardSchema.safeParse(values);
    if (error) {
      setErrors(z.flattenError(error).fieldErrors);
      return;
    }

    if (boardId !== undefined) {
      dispatchBoards({ type: "board_edited", boardId, board: data });
      toast.success("Board edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchBoards({
        type: "board_created",
        board: { id, lists: [], ...data },
      });
      toast.success("Board created successfully");
    }

    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setErrors({});
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["board-modal"])}
      heading={
        boardId !== undefined ? "Edit existing board" : "Create a new board "
      }
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      extraActions={
        boardId !== undefined && (
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

      <ColorInput
        label="Color"
        name="color"
        defaultValue={defaultValues?.color}
        error={errors.color?.[0]}
      />
    </FormModal>
  );
}
