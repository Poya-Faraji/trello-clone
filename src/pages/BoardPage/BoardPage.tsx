import { type ReactNode } from "react";

import CounterProvider from "@/Provider/CounterProvider";

import Board from "@/components/Board/Board";

// import { useParams } from "react-router";

import styles from "./BoardPage.module.css";

export default function BoardPage(): ReactNode {
  // const { id } = useParams();

  return (
    <div className={styles["board-page"]}>
      <CounterProvider>
        <Board />
      </CounterProvider>
    </div>
  );
}
