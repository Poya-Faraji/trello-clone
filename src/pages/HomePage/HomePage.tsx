import { type ReactNode, use } from "react";

import BoardsProvider from "@/Provider/BoardProvider";

import BoardCard from "@/components/BoardCard/BoardCard";
import Button from "@/components/Button/Button";

import BoardContext from "@/context/board-context";

import styles from "./HomePage.module.css";

export default function HomePage(): ReactNode {
  return (
    <BoardsProvider>
      <HomePageContent />
    </BoardsProvider>
  );
}

function HomePageContent(): ReactNode {
  const { boards } = use(BoardContext);

  return (
    <div className={styles["home-page"]}>
      <div className={styles.header}>
        <h1 className={styles.title}>Boards</h1>
        <Button color="primary">Create</Button>
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
    </div>
  );
}
