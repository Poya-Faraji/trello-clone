import { type ReactNode, useRef } from "react";

import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import ListItemModal from "@/Modals/ListItemModal/ListItemModal";

import IconsButton from "@/components/IconButton/IconsButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteDotsLine from "@/icons/MingcuteDotsLine";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import styles from "./ListHeader.module.css";

type Props = {
  listeners?: SyntheticListenerMap;
  title: string;
  listIndex: number;
};

export default function ListHeader({
  title,
  listIndex,
  listeners,
}: Props): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleButtonClick = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={styles["list-header"]}>
      <div className={styles["drag-handle"]} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.actions}>
        <IconsButton onClick={handleButtonClick}>
          <MingcuteAddLine />
        </IconsButton>
        <IconsButton>
          <MingcuteMore1Line />
        </IconsButton>
      </div>
      <ListItemModal ref={modalRef} listIndex={listIndex} />
    </div>
  );
}
