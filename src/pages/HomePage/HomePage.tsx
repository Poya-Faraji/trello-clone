import { type ReactNode, useRef } from "react";

import BoardModal from "@/Modals/BoardModal/BoardModal";

import BoardCard from "@/components/BoardCard/BoardCard";
import Button from "@/components/Button/Button";

import { useKanbanStore } from "@/stores/kanban-store";

import styles from "./HomePage.module.css";

export default function HomePage(): ReactNode {
  const boards = useKanbanStore((state) => state.boards);

  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCreateButtonClick = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={styles["home-page"]}>
      <div className={styles.header}>
        <h1 className={styles.title}>Boards</h1>
        <Button color="primary" onClick={handleCreateButtonClick}>
          Create
        </Button>
      </div>
      <ul className={styles.boards}>
        {boards.map((board) => {
          return (
            <li key={board.id}>
              <BoardCard board={board} />
            </li>
          );
        })}
      </ul>
      <BoardModal modalRef={modalRef} />
    </div>
  );
}
