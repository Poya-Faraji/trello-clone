import type { ReactNode } from "react";

import BoardCard from "@/components/BoardCard/BoardCard";
import Button from "@/components/Button/Button";

import styles from "./HomePage.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles["home-page"]}>
      <div className={styles.header}>
        <h1 className={styles.title}>Boards</h1>
        <Button color="primary">Create</Button>
      </div>
      <ul className={styles.boards}>
        <li>
          <BoardCard
            id={1}
            title="Board 1"
            color="green"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur reprehenderit ex tempore magni soluta amet perferendis, vel quibusdam rerum."
          />
        </li>
        <li>
          <BoardCard
            id={2}
            title="Board 2"
            color="blue"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur reprehenderit ex tempore magni soluta amet perferendis, vel quibusdam rerum."
          />
        </li>
        <li>
          <BoardCard
            id={3}
            title="Board 3"
            color="red"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur reprehenderit ex tempore magni soluta amet perferendis, vel quibusdam rerum."
          />
        </li>
      </ul>
    </div>
  );
}
