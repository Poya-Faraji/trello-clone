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

import BoardContext from "@/context/Board-context";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Values = Omit<ListType, "id" | "items">;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {};

export default function ListModal({ modalRef }: Props): ReactNode {
  const [titleError, setTitleError] = useState<string | null>(null);

  const { dispatchList } = use(BoardContext);

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values: Values = {
      title: formData.get("title") as string,
    };

    if (!validateTitle(values.title)) {
      return;
    }

    const id = crypto.randomUUID();

    dispatchList({ type: "list_created", list: { id, items: [], ...values } });
    toast.success("List created successfully");
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
      heading="Create a New List"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <TextInput label="Title" name="title" error={titleError} />
    </FormModal>
  );
}
