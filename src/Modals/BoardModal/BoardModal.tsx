import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { useNavigate } from "react-router";

import { toast } from "react-toastify";

import clsx from "clsx";

import Button from "@/components/Button/Button";
import ColorInput from "@/components/ColorInput/ColorInput";
import TextArea from "@/components/TextArea/TextArea";

import BoardContext from "@/context/board-context";

import type { BoardColor, BoardType } from "@/types/board";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./BoardModal.module.css";

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
  const [titleError, setTitleError] = useState<string | null>(null);

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

    if (!validateTitle(values.title)) {
      return;
    }

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
        error={titleError}
      />
      <TextArea
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
      />

      <ColorInput
        label="Color"
        name="color"
        defaultValue={defaultValues?.color}
      />
    </FormModal>
  );
}
