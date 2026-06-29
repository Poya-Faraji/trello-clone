import { type ReactNode, useRef } from "react";

import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import ListItemModal from "@/Modals/ListItemModal/ListItemModal";
import ListModal from "@/Modals/ListModal/ListModal";
import type { ListType } from "@/Types/list";

import IconsButton from "@/components/IconButton/IconsButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteDotsLine from "@/icons/MingcuteDotsLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./ListHeader.module.css";

type Props = {
  listeners?: SyntheticListenerMap;
  list: ListType;
  listIndex: number;
};

export default function ListHeader({
  list,
  listIndex,
  listeners,
}: Props): ReactNode {
  const ListModalRef = useRef<HTMLDialogElement>(null);
  const ListIteModalRef = useRef<HTMLDialogElement>(null);

  const handleCreateListButtonClick = (): void => {
    ListModalRef.current?.showModal();
  };

  const handleCreateListItemButtonClick = (): void => {
    ListIteModalRef.current?.showModal();
  };
  return (
    <div className={styles["list-header"]}>
      <div className={styles["drag-handle"]} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{list.title}</div>
      </div>
      <div className={styles.actions}>
        <IconsButton onClick={handleCreateListButtonClick}>
          <MingcuteEdit2Line />
        </IconsButton>
        <IconsButton onClick={handleCreateListItemButtonClick}>
          <MingcuteAddLine />
        </IconsButton>
      </div>
      <ListItemModal modalRef={ListIteModalRef} listIndex={listIndex} />
      <ListModal
        modalRef={ListModalRef}
        listIndex={listIndex}
        defaultValues={list}
      />
    </div>
  );
}
