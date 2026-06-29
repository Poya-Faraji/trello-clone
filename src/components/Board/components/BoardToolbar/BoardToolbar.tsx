import { type ReactNode, useRef } from "react";

import ListModal from "@/Modals/ListModal/ListModal";

import IconsButton from "@/components/IconButton/IconsButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./BoardToolbar.module.css";

export default function BoardToolbar(): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCreateListButtonClick = (): void => {
    modalRef.current?.showModal();
  };
  return (
    <div className={styles["board-toolbar"]}>
      <div className={styles.title}>Board Title</div>
      <div className={styles.actions}>
        <IconsButton>
          <MingcuteEdit2Line />
        </IconsButton>
        <IconsButton onClick={handleCreateListButtonClick}>
          <MingcuteAddLine />
        </IconsButton>
      </div>

      <ListModal modalRef={modalRef} />
    </div>
  );
}
