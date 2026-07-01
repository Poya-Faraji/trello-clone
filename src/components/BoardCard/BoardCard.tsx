import { type ReactNode, useRef } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import BoardModal from "@/Modals/BoardModal/BoardModal";

import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import type { BoardType } from "@/types/board";

import IconsButton from "../IconButton/IconsButton";

import styles from "./BoardCard.module.css";

type Props = {
  board: BoardType;
};

export default function BoardCard({ board }: Props): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleEditButtonClick = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={clsx(styles["board-card"], board.color)}>
      <div className={styles.cover}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link to={`board/${board.id}`} className={styles.title}>
            {board.title}
          </Link>
          <IconsButton onClick={handleEditButtonClick}>
            <MingcuteEdit2Line />
          </IconsButton>
        </div>
        <p className={styles.description}>{board.description}</p>
      </div>
      <BoardModal
        modalRef={modalRef}
        boardId={board.id}
        defaultValues={board}
      />
    </div>
  );
}
