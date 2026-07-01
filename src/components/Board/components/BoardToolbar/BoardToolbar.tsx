import { type ReactNode, use, useRef } from "react";

import BoardModal from "@/Modals/BoardModal/BoardModal";
import ListModal from "@/Modals/ListModal/ListModal";

import IconsButton from "@/components/IconButton/IconsButton";

import BoardPageContext from "@/context/board-page-context";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./BoardToolbar.module.css";

export default function BoardToolbar(): ReactNode {
  const { board } = use(BoardPageContext);

  const listModalRef = useRef<HTMLDialogElement>(null);
  const boardModalRef = useRef<HTMLDialogElement>(null);

  const handleCreateListButtonClick = (): void => {
    listModalRef.current?.showModal();
  };

  const handleEditBoardButtonClick = (): void => {
    boardModalRef.current?.showModal();
  };
  return (
    <div className={styles["board-toolbar"]}>
      <div className={styles.title}>{board.title}</div>
      <div className={styles.actions}>
        <IconsButton onClick={handleEditBoardButtonClick}>
          <MingcuteEdit2Line />
        </IconsButton>
        <IconsButton onClick={handleCreateListButtonClick}>
          <MingcuteAddLine />
        </IconsButton>
      </div>

      <ListModal modalRef={listModalRef} />
      <BoardModal
        modalRef={boardModalRef}
        boardId={board.id}
        defaultValues={board}
      />
    </div>
  );
}
