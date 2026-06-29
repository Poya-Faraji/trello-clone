import { type ReactNode } from "react";

import BoardLists from "./components/BoardLists/BoardLists";
import BoardToolbar from "./components/BoardToolbar/BoardToolbar";

import styles from "./Board.module.css";

export default function Board(): ReactNode {
  return (
    <div className={styles.board}>
      <BoardToolbar />
      <BoardLists />
    </div>
  );
}
