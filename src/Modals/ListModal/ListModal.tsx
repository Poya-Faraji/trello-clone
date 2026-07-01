import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListType } from "@/Types/list";

import Button from "@/components/Button/Button";

import BoardContext from "@/context/lists-context";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Values = Omit<ListType, "id" | "items">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex?: number;
  defaultValues?: Partial<Values>;
};

export default function ListModal({
  modalRef,
  listIndex,
  defaultValues,
}: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }

    dispatchList({ type: "list_removed", listIndex });
    toast.success("List removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
    };

    if (!validateTitle(values.title)) {
      return;
    }

    if (listIndex !== undefined) {
      dispatchList({ type: "list_edited", listIndex, list: values });
      toast.success("List edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchList({
        type: "list_created",
        list: { id, items: [], ...values },
      });
      toast.success("List created successfully");
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
      className={clsx(styles["list-modal"])}
      heading={
        listIndex !== undefined ? "Edit existing list" : "Create a new list "
      }
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      extraActions={
        listIndex !== undefined && (
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
    </FormModal>
  );
}
