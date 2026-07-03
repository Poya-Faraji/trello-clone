import { type ReactNode } from "react";

import type { BoardType } from "@/types/board";

import BoardLists from "./components/BoardLists/BoardLists";
import BoardToolbar from "./components/BoardToolbar/BoardToolbar";

import styles from "./Board.module.css";

type Props = {
  board: BoardType;
};

export default function Board({ board }: Props): ReactNode {
  return (
    <div className={styles.board}>
      <BoardToolbar board={board} />
      <BoardLists lists={board.lists} />
    </div>
  );
}
