import { type ReactNode } from "react";

import BoardProvider from "@/Provider/BoardProvider";
import ActiveItemProvider from "@/Provider/ListProvider";

import Board from "@/components/Board/Board";

// import { useParams } from "react-router";

import styles from "./BoardPage.module.css";

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
