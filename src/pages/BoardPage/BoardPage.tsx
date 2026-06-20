import { useState, type ReactNode } from "react";

import Board from "@/components/Board/Board";

// import { useParams } from "react-router";

import styles from "./BoardPage.module.css";
import CounterContext from "@/context/counter-context";

export default function BoardPage(): ReactNode {
  // const { id } = useParams();

  const [count, setCount] = useState<number>(0)

  const increment = (): void => {
    setCount(prev => prev + 1)
  };

  const reset = (): void => {
    setCount(0)
  };

  return (
    <div className={styles["board-page"]}>
      <CounterContext value={{ count, increment, reset }}>
        <Board />
      </CounterContext>
    </div>
  );
}
