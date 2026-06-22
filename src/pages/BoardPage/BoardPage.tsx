import { type ReactNode } from "react";

import BoardProvider from "@/Provider/BoardProvider";

import Board from "@/components/Board/Board";

// import { useParams } from "react-router";

import styles from "./BoardPage.module.css";
import ActiveItemProvider from "@/Provider/ListProvider";

export default function BoardPage(): ReactNode {
  // const { id } = useParams();

  return (
    <div className={styles["board-page"]}>
      <BoardProvider>
        <ActiveItemProvider>
          <Board />
        </ActiveItemProvider>
      </BoardProvider>
    </div>
  );
}
