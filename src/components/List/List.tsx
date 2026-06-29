import { type ReactNode } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import clsx from "clsx";

import type { ListType } from "@/Types/list";

import ListHeader from "./components/ListHeader/ListHeader";
import ListItems from "./components/ListItems/ListItems";

import styles from "./List.module.css";

type Props = {
  presentational?: boolean;
  listIndex: number;
  list: ListType;
};

export default function List({
  presentational,
  list,
  listIndex,
}: Props): ReactNode {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: list.id, data: { isList: true, listIndex, list } });

  return (
    <div
      ref={setNodeRef}
      className={clsx(styles.list, presentational && styles.presentational)}
      style={{
        opacity: isDragging ? "0.4" : undefined,
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...attributes}
    >
      <ListHeader listeners={listeners} list={list} listIndex={listIndex} />
      <ListItems
        presentational={presentational}
        list={list}
        listIndex={listIndex}
      />
    </div>
  );
}
