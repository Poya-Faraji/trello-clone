import { type ReactNode, useRef } from "react";

import CreateListItemModal from "@/components/CreateListItemModal/CreateListItemModal";
import IconsButton from "@/components/IconButton/IconsButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import styles from "./ListHeader.module.css";

type Props = {
  title: string;
  listIndex: number;
};

export default function ListHeader({ title, listIndex }: Props): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleButtonClick = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={styles["list-header"]}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.actions}>
          <IconsButton onClick={handleButtonClick}>
            <MingcuteAddLine />
          </IconsButton>
          <IconsButton>
            <MingcuteMore1Line />
          </IconsButton>
        </div>
      </div>
      <CreateListItemModal ref={modalRef} listIndex={listIndex} />
    </div>
  );
}
