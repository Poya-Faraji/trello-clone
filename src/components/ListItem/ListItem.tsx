import { type MouseEvent, type ReactNode, useRef } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import clsx from "clsx";

import ListItemModal from "@/Modals/ListItemModal/ListItemModal";
import type { ListItemType } from "@/Types/list-item";

import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

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
    over,
  } = useSortable({
    id: item.id,
    data: { isList: false, listIndex, itemIndex, item },
  });

  const modalRef = useRef<HTMLDialogElement>(null);

  const overListIndex = over?.data.current?.listIndex;

  const handleEditButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    modalRef.current?.showModal();
  };

  return (
    <>
      <div
        ref={setNodeRef}
        className={clsx(
          styles["list-item"],
          presentational && styles.presentational,
        )}
        style={{
          opacity: isDragging ? "0.4" : undefined,
          transform: CSS.Translate.toString(transform),
          transition: listIndex === overListIndex ? transition : undefined,
        }}
        {...listeners}
        {...attributes}
      >
        {item.title}
        <IconsButton onPointerDown={handleEditButtonClick}>
          <MingcuteEdit2Line />
        </IconsButton>
      </div>
      <ListItemModal
        modalRef={modalRef}
        listIndex={listIndex}
        itemIndex={itemIndex}
        defaultValues={item}
      />
    </>
  );
}
