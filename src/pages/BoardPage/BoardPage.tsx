import { type ReactNode, use } from "react";

import { useParams } from "react-router";

import BoardPageProvider from "@/Provider/BoardPageProvider";
import BoardProvider from "@/Provider/BoardProvider";
import DndProvider from "@/Provider/DndProvider/DndProvider";
import ListsProvider from "@/Provider/ListsProvider";

import Board from "@/components/Board/Board";

import BoardContext from "@/context/board-context";

import NotFoundPage from "../notFoundPage/NotFoundPage";

import styles from "./BoardPage.module.css";

export default function BoardPage(): ReactNode {
  return (
    <BoardProvider>
      <BoardPageContent />
    </BoardProvider>
  );
}

function BoardPageContent(): ReactNode {
  const { id } = useParams();

  const { boards } = use(BoardContext);

  const board = boards.find((board) => board.id === id);

  if (!board) {
    return <NotFoundPage />;
  }

  return (
    <BoardPageProvider board={board}>
      <ListsProvider>
        <DndProvider>
          <div className={styles["board-page"]}>
            <Board />
          </div>
        </DndProvider>
      </ListsProvider>
    </BoardPageProvider>
  );
}
