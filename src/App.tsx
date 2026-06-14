import { type ReactNode } from "react";

import clsx from "clsx";

import styles from "./App.module.css";
import BoardCard from "./components/BoardCard/BoardCard";

export default function App(): ReactNode {
  return (
    <div className={styles.app}>
      <header>Header</header>
      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>Boards</h1>
          <button>Create</button>
        </div>

        <ul className={styles.boards}>
          <li>
            <BoardCard
              title="Board 1"
              color="green"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur reprehenderit ex tempore magni soluta amet perferendis, vel quibusdam rerum."
            />
          </li>

          <li>
            <BoardCard
              title="Board 2"
              color="blue"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur reprehenderit ex tempore magni soluta amet perferendis, vel quibusdam rerum."
            />
          </li>

          <li>
            <BoardCard
              title="Board 3"
              color="red"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur reprehenderit ex tempore magni soluta amet perferendis, vel quibusdam rerum."
            />
          </li>
        </ul>
      </main>

      <footer>footer</footer>
    </div>
  );
}
