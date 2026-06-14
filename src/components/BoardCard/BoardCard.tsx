import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./BoardCard.module.css";
import { Link } from "react-router";

type BoardColor =
  | "purple"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "gray";

type Props = {
  id: number
  title: string;
  description: string;
  color: BoardColor;
};

export default function BoardCard({
  id,
  title,
  description,
  color,
}: Props): ReactNode {
  return (
    <div className={clsx(styles["board-card"], color)}>
      <div className={styles.cover}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <Link to={`board/${id}`}>View</Link>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div >
  );
}
