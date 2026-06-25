import { type MouseEvent, type ReactNode, use } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { toast } from "react-toastify";

import clsx from "clsx";

import type { ListItemType } from "@/Types/list-item";

import BoardContext from "@/context/Board-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import IconsButton from "../IconButton/IconsButton";

import styles from "./ListItem.module.css";

type Props = {
  listIndex: number;
  itemIndex: number;
  item: ListItemType;
  presentational?: boolean;
};

export default function ListItem({
  listIndex,
  itemIndex,
  item,
  presentational,
}: Props): ReactNode {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    data: { isList: false, listIndex, item },
  });

  const { dispatchList } = use(BoardContext);

  const handleRemoveEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatchList({ type: "item_removed", listIndex, itemIndex });
    toast.success("Item removed successfully");
  };

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        styles["list-item"],
        presentational && styles.presentational,
      )}
      style={{
        opacity: isDragging ? "0.4" : undefined,
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...listeners}
      {...attributes}
    >
      {item.title}
      <IconsButton onPointerDown={handleRemoveEvent}>
        <MingcuteDelete2Line />
      </IconsButton>
    </div>
  );
}
