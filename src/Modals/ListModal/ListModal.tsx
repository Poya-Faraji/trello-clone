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

import BoardContext from "@/context/lists-context";

import { ListSchema } from "@/schemas/list-schema";

import type { ListType } from "@/types/list";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Errors = { [key in keyof Values]?: string[] };

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
  const [errors, setErrors] = useState<Errors>({});

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

    const { data, error } = ListSchema.safeParse(values);
    if (error) {
      setErrors(z.flattenError(error).fieldErrors);
      return;
    }

    if (listIndex !== undefined) {
      dispatchList({ type: "list_edited", listIndex, list: data });
      toast.success("List edited successfully");
    } else {
      const id = crypto.randomUUID();
      dispatchList({
        type: "list_created",
        list: { id, items: [], ...data },
      });
      toast.success("List created successfully");
    }

    modalRef.current?.close();
  };

  const handleFormReset = (): void => {
    setErrors({});
  };

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-modal"])}
      heading={
        listIndex !== undefined ? "Edit existing list" : "Create a new list"
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
        error={errors.title?.[0]}
      />
    </FormModal>
  );
}
