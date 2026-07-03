import { type ReactNode } from "react";

import { useParams } from "react-router";

import DndProvider from "@/Provider/DndProvider/DndProvider";

import Board from "@/components/Board/Board";

import { useKanbanStore } from "@/stores/kanban-store";

import NotFoundPage from "../notFoundPage/NotFoundPage";

import styles from "./BoardPage.module.css";

export default function BoardPage(): ReactNode {
  const { boardId } = useParams();

  const boards = useKanbanStore((state) => state.boards);

  const board = boards.find((board) => board.id === boardId);

  if (!board) {
    return <NotFoundPage />;
  }

  return (
    <DndProvider>
      <div className={styles["board-page"]}>
        <Board board={board} />
      </div>
    </DndProvider>
  );
}
