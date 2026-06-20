import { useState, type ReactNode } from "react";

import Board from "@/components/Board/Board";

// import { useParams } from "react-router";

import styles from "./BoardPage.module.css";
import CounterProvider from "@/Provider/CounterProvider";

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
