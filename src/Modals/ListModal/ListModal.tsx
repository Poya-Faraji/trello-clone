import {
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
  use,
  useState,
} from "react";

import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import clsx from "clsx";

import Button from "@/components/Button/Button";

import BoardContext from "@/context/lists-context";

import { ListSchema } from "@/schemas/list-schema";

import type { ListType } from "@/types/list";

import TextInput from "../../components/TextInput/TextInput";
import FormModal from "../FromModal/FormModal";

import styles from "./ListModal.module.css";

type Values = z.infer<typeof ListSchema>;

type Props = Pick<ComponentProps<typeof FormModal>, "modalRef"> & {
  listIndex?: number;
  defaultValues?: Values;
};

export default function ListModal({
  modalRef,
  listIndex,
  defaultValues,
}: Props): ReactNode {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: zodResolver(ListSchema) });
  const { dispatchList } = use(BoardContext);

  const handleRemoveButtonClick = (): void => {
    if (listIndex === undefined) {
      return;
    }

    dispatchList({ type: "list_removed", listIndex });
    toast.success("List removed successfully");

    modalRef.current?.close();
  };

  const handleFormSubmit = (values: Values): void => {
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

  return (
    <FormModal
      modalRef={modalRef}
      className={clsx(styles["list-modal"])}
      heading={
        listIndex !== undefined ? "Edit existing list" : "Create a new list"
      }
      onSubmit={handleSubmit(handleFormSubmit)}
      onRemove={listIndex !== undefined && handleRemoveButtonClick}
    >
      <TextInput
        {...register("title")}
        label="Title"
        error={errors.title?.message}
      />
    </FormModal>
  );
}
